const db = require("../config/db");

module.exports = {
    async getByExercicio(exercicio_id) {
        const [rows] = await db.query("SELECT * FROM alternativas WHERE id_exercicio = ?", [exercicio_id]);
        return rows;
    },

    async create(texto, correta, id_exercicio) {
        const [result] = await db.query(
            "INSERT INTO alternativas (texto, correta, id_exercicio) VALUES (?, ?, ?)",
            [texto, correta ? 1 : 0, id_exercicio]
        );
        return result.insertId;
    },

    async getById(id_alternativa) {
        const [rows] = await db.query("SELECT * FROM alternativas WHERE id_alternativa = ?", [id_alternativa]);
        return rows[0];
    }
};
