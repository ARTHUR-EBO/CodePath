// traco-mysql.js
const mysql = require("mysql2/promise");
require("dotenv").config(); // lê variáveis do .env

async function testConnection() {
  let connection;

  try {
    // Conecta no MySQL
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT || 3306,
    });

    console.log("✅ Conexão com o MySQL estabelecida com sucesso!");

    // Testa buscando 1 usuário
    const [rows] = await connection.execute("SELECT * FROM users LIMIT 1");

    if (rows.length > 0) {
      console.log("👤 Usuário encontrado:", rows[0]);
    } else {
      console.log("⚠️ Nenhum usuário encontrado no banco.");
    }
  } catch (err) {
    console.error("❌ Erro ao conectar ou consultar:", err);
  } finally {
    if (connection) await connection.end();
  }
}

testConnection();
