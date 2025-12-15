const db = require("../config/db");

module.exports = {
    async getAll() {
        const [rows] = await db.query("SELECT * FROM trilhas");
        return rows;
    },

    async create(titulo, descricao) {
        const [result] = await db.query(
            "INSERT INTO trilhas (titulo, descricao) VALUES (?, ?)",
            [titulo, descricao]
        );
        return result.insertId;
    }
};
