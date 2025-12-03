const ProgressoTrilha = require("../models/ProgressoTrilha");
const db = require("../config/db");

module.exports = {
    async getProgresso(req, res) {
        const { user_id, trilha_id } = req.params;
        try {
            const progresso = await ProgressoTrilha.get(user_id, trilha_id);
            if (!progresso) return res.status(404).json({ error: "Progresso não encontrado" });
            res.json(progresso);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: "Erro ao buscar progresso" });
        }
    },

    // função pública para ser chamada por progressoLicaoController
    async atualizarProgresso(user_id, trilha_id) {
        try {
            // total de lições na trilha
            const [totalRows] = await db.query("SELECT COUNT(*) AS total FROM licoes WHERE trilha_id = ?", [trilha_id]);
            const total = totalRows && totalRows[0] ? totalRows[0].total : 0;

            // lições concluídas pelo usuário nessa trilha
            const [doneRows] = await db.query(
                `SELECT COUNT(*) AS total FROM progresso_licao pl
                 JOIN licoes l ON pl.licao_id = l.id
                 WHERE pl.user_id = ? AND l.trilha_id = ?`,
                [user_id, trilha_id]
            );
            const feitas = doneRows && doneRows[0] ? doneRows[0].total : 0;

            const porcentagem = total > 0 ? Math.round((feitas / total) * 100) : 0;

            const existing = await ProgressoTrilha.get(user_id, trilha_id);
            if (!existing) {
                await ProgressoTrilha.create(user_id, trilha_id, porcentagem);
            } else {
                await ProgressoTrilha.update(user_id, trilha_id, porcentagem);
            }

            return porcentagem;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
};
