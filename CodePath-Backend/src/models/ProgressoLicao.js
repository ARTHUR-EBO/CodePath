const db = require("../config/db");

module.exports = {
    async exists(user_id, licao_id) {
        const [rows] = await db.query(
            "SELECT * FROM progresso_licao WHERE user_id = ? AND licao_id = ?",
            [user_id, licao_id]
        );
        return !!rows[0];
    },

    async create(user_id, licao_id) {
        const [result] = await db.query(
            "INSERT INTO progresso_licao (user_id, licao_id, concluida) VALUES (?, ?, 1)",
            [user_id, licao_id]
        );
        return result.insertId;
    },

    async getByUserAndTrilha(user_id, trilha_id) {
        // retorna lições concluídas do usuário na trilha (join)
        const [rows] = await db.query(
            `SELECT pl.* FROM progresso_licao pl
             JOIN licoes l ON pl.licao_id = l.id
             WHERE pl.user_id = ? AND l.trilha_id = ?`,
            [user_id, trilha_id]
        );
        return rows;
    }
};
