const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = {
    async register(req, res) {
        const { nome, email, senha } = req.body;

        if (!nome || !email || !senha) {
            return res.status(400).json({ error: "Preencha todos os campos" });
        }

        const userExists = await User.findByEmail(email);
        if (userExists) {
            return res.status(400).json({ error: "Email já cadastrado" });
        }

        const senhaHash = await bcrypt.hash(senha, 10);

        const userId = await User.create(nome, email, senhaHash);

        return res.json({ message: "Usuário criado com sucesso", id: userId });
    },

    async login(req, res) {
        const { email, senha } = req.body;

        if (!email || !senha) {
            return res.status(400).json({ error: "Email e senha são obrigatórios" });
        }

        const user = await User.findByEmail(email);
        if (!user) {
            return res.status(400).json({ error: "Usuário não encontrado" });
        }

        const senhaOk = await bcrypt.compare(senha, user.senha);
        if (!senhaOk) {
            return res.status(401).json({ error: "Senha incorreta" });
        }

        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        return res.json({
            message: "Login bem-sucedido",
            token,
            user: {
                id: user.id,
                nome: user.nome,
                email: user.email,
                xp: user.xp
            }
        });
    }
};
