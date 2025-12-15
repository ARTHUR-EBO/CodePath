const db = require("../config/db");

module.exports = {
    async get(user_id, trilha_id) {
        const [rows] = await db.query(
            "SELECT * FROM progresso_trilha WHERE user_id = ? AND trilha_id = ?",
            [user_id, trilha_id]
        );
        return rows[0];
    },

    async create(user_id, trilha_id, progresso) {
        const [result] = await db.query(
            "INSERT INTO progresso_trilha (user_id, trilha_id, progresso) VALUES (?, ?, ?)",
            [user_id, trilha_id, progresso]
        );
        return result.insertId;
    },

    async update(user_id, trilha_id, progresso) {
        await db.query(
            "UPDATE progresso_trilha SET progresso = ?, atualizado_em = CURRENT_TIMESTAMP WHERE user_id = ? AND trilha_id = ?",
            [progresso, user_id, trilha_id]
        );
    }
};
