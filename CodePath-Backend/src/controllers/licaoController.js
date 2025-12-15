const Licao = require("../models/Licao");

module.exports = {
    async listarPorTrilha(req, res) {
        const { trilha_id } = req.params;

        try {
            const licoes = await Licao.getByTrilha(trilha_id);
            res.json(licoes);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Erro ao listar lições" });
        }
    },

    async buscarPorId(req, res) {
        const { id } = req.params;

        try {
            const licao = await Licao.getById(id);

            if (!licao) {
                return res.status(404).json({ error: "Lição não encontrada" });
            }

            res.json(licao);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Erro ao buscar lição" });
        }
    },

    async criar(req, res) {
        const { trilha_id, titulo, conteudo } = req.body;

        if (!trilha_id || !titulo) {
            return res.status(400).json({ error: "trilha_id e título são obrigatórios" });
        }

        try {
            const id = await Licao.create(trilha_id, titulo, conteudo);
            res.json({ message: "Lição criada com sucesso", id });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Erro ao criar lição" });
        }
    }
};
