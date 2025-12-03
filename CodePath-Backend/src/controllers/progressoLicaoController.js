const ProgressoLicao = require("../models/ProgressoLicao");
const ProgressoTrilhaController = require("./progressoTrilhaController");
const db = require("../config/db");

async function marcarConcluida(user_id, licao_id) {
    try {
        const exists = await ProgressoLicao.exists(user_id, licao_id);
        if (exists) return false;

        await ProgressoLicao.create(user_id, licao_id);

        const [rows] = await db.query("SELECT trilha_id FROM licoes WHERE id = ?", [licao_id]);
        const trilha_id = rows && rows[0] ? rows[0].trilha_id : null;

        if (trilha_id) {
            await ProgressoTrilhaController.atualizarProgresso(user_id, trilha_id);
        }

        return true;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

async function marcarConcluidaRoute(req, res) {
    const { user_id, licao_id } = req.body;
    if (!user_id || !licao_id) return res.status(400).json({ error: "user_id e licao_id são obrigatórios" });

    try {
        const created = await marcarConcluida(user_id, licao_id);
        if (!created) return res.status(200).json({ message: "Lição já estava concluída" });
        return res.json({ message: "Lição marcada como concluída" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erro ao marcar lição como concluída" });
    }
}

module.exports = {
    marcarConcluida,
    marcarConcluidaRoute
};
