const db = require("../config/db");

module.exports = {
    async getByTrilha(trilha_id) {
        const [rows] = await db.query(
            "SELECT * FROM licoes WHERE trilha_id = ?",
            [trilha_id]
        );
        return rows;
    },

    async create(trilha_id, titulo, conteudo) {
        const [result] = await db.query(
            "INSERT INTO licoes (trilha_id, titulo, conteudo) VALUES (?, ?, ?)",
            [trilha_id, titulo, conteudo]
        );
        return result.insertId;
    }
};
