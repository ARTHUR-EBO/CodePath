const Trilha = require("../models/Trilha");

module.exports = {
    async listar(req, res) {
        const trilhas = await Trilha.getAll();
        res.json(trilhas);
    },

    async criar(req, res) {
        const { titulo, descricao } = req.body;

        if (!titulo) {
            return res.status(400).json({ error: "O título é obrigatório" });
        }

        const id = await Trilha.create(titulo, descricao);
        res.json({ message: "Trilha criada com sucesso", id });
    }
};
