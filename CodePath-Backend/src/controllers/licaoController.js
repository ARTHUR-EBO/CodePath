const Licao = require("../models/Licao");

module.exports = {
    async listarPorTrilha(req, res) {
        const { trilha_id } = req.params;

        const licoes = await Licao.getByTrilha(trilha_id);
        res.json(licoes);
    },

    async criar(req, res) {
        const { trilha_id, titulo, conteudo } = req.body;

        if (!trilha_id || !titulo) {
            return res.status(400).json({ error: "trilha_id e título são obrigatórios" });
        }

        const id = await Licao.create(trilha_id, titulo, conteudo);
        res.json({ message: "Lição criada com sucesso", id });
    }
};
