const Alternativa = require("../models/Alternativa");

module.exports = {
    async listar(req, res) {
        const { exercicio_id } = req.params;
        try {
            const rows = await Alternativa.getByExercicio(exercicio_id);
            res.json(rows);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Erro ao buscar alternativas" });
        }
    },

    async criar(req, res) {
        const { texto, correta, id_exercicio } = req.body;
        if (!texto || correta === undefined || !id_exercicio) {
            return res.status(400).json({ error: "Campos obrigatórios faltando" });
        }
        try {
            const id = await Alternativa.create(texto, correta, id_exercicio);
            res.json({ message: "Alternativa criada com sucesso", id });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Erro ao criar alternativa" });
        }
    }
};
