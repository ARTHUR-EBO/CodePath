// src/models/User.js
const db = require("../config/db");

module.exports = {
  async create(nome, email, senhaHash) {
    try {
      const [result] = await db.query(
        "INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)",
        [nome, email, senhaHash]
      );
      return result.insertId;
    } catch (err) {
      console.error("User.create error:", err);
      throw err;
    }
  },

  async findByEmail(email) {
    try {
      const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
      return rows[0];
    } catch (err) {
      console.error("User.findByEmail error:", err);
      throw err;
    }
  },

  async findById(id) {
    try {
      const [rows] = await db.query("SELECT * FROM users WHERE id = ?", [id]);
      return rows[0];
    } catch (err) {
      console.error("User.findById error:", err);
      throw err;
    }
  },

  async addXP(user_id, amount) {
    try {
      await db.query("UPDATE users SET xp = xp + ? WHERE id = ?", [amount, user_id]);
    } catch (err) {
      console.error("User.addXP error:", err);
      throw err;
    }
  }
};
