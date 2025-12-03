// src/models/Exercicio.js
const db = require("../config/db");

module.exports = {
    async getByLicao(licao_id) {
        try {
            const [rows] = await db.query("SELECT * FROM exercicios WHERE licao_id = ?", [licao_id]);
            return rows;
        } catch (err) {
            console.error("Exercicio.getByLicao error:", err);
            throw err;
        }
    },

    async create(licao_id, enunciado) {
        try {
            const [result] = await db.query(
                "INSERT INTO exercicios (licao_id, enunciado) VALUES (?, ?)",
                [licao_id, enunciado]
            );
            return result.insertId;
        } catch (err) {
            console.error("Exercicio.create error:", err);
            throw err;
        }
    },

    async getById(id) {
        try {
            const [rows] = await db.query("SELECT * FROM exercicios WHERE id = ?", [id]);
            return rows[0];
        } catch (err) {
            console.error("Exercicio.getById error:", err);
            throw err;
        }
    }
};
