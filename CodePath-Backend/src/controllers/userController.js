const bcrypt = require("bcrypt");
console.log("JWT_SECRET:", process.env.JWT_SECRET);
const jwt = require("jsonwebtoken");
const User = require("../models/User");


module.exports = {
    // 1️⃣ Registro de usuário
    async register(req, res) {
        const { nome, email, senha } = req.body;

        if (!nome || !email || !senha) {
            return res.status(400).json({ error: "Preencha todos os campos" });
        }

        try {
            const userExists = await User.findByEmail(email);
            if (userExists) {
                return res.status(400).json({ error: "Email já cadastrado" });
            }

            const senhaHash = await bcrypt.hash(senha, 10);
            const userId = await User.create(nome, email, senhaHash);

            return res.json({
                message: "Usuário criado com sucesso",
                id: userId
            });

        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: "Erro ao criar usuário" });
        }
    },

    // 2️⃣ Login
    async login(req, res) {
        const { email, senha } = req.body;

        if (!email || !senha) {
            return res.status(400).json({ error: "Email e senha são obrigatórios" });
        }

        try {
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

        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: "Erro ao realizar login" });
        }
    },

    // 3️⃣ Buscar usuário pelo ID
    async getUserById(req, res) {
        const { id } = req.params;

        try {
            const user = await User.findById(id);

            if (!user) {
                return res.status(404).json({ error: "Usuário não encontrado" });
            }

            return res.json({
                id: user.id,
                nome: user.nome,
                email: user.email,
                xp: user.xp,
                foto: user.foto
            });

        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: "Erro ao buscar usuário" });
        }
    },

    async uploadFoto(req, res) {
        const { id } = req.params;
    
        if (!req.file) {
            return res.status(400).json({ error: "Nenhuma imagem enviada" });
        }
    
        const caminhoFoto = `uploads/users/${req.file.filename}`;
    
        try {
            await User.updateFoto(id, caminhoFoto);
    
            return res.json({
                message: "Foto atualizada com sucesso",
                foto: caminhoFoto
            });
    
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: "Erro ao salvar foto" });
        }
    },

    async removeFoto(req, res) {
        const { id } = req.params;

        try {
            const user = await User.findById(id);

            if (user?.foto) {
                const caminho = path.join(
                    __dirname,
                    "../../public",
                    user.foto
                );

                if (fs.existsSync(caminho)) {
                    fs.unlinkSync(caminho);
                }

                await User.updateFoto(id, null);
            }

            return res.json({ message: "Foto removida com sucesso" });

        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: "Erro ao remover foto" });
        }
    }
};
