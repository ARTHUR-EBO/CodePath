// traco-user.js
const User = require("./src/models/User");
const bcrypt = require("bcryptjs");

async function testUserModel() {
  try {
    console.log("🧪 Testando User Model...");

    // Teste de criação de usuário
    const nome = "Teste";
    const email = "teste@example.com";
    const senha = "123456";
    const senhaHash = await bcrypt.hash(senha, 10);

    const userId = await User.create(nome, email, senhaHash);
    console.log("✅ Usuário criado com ID:", userId);

    // Teste de busca por email
    const userByEmail = await User.findByEmail(email);
    if (userByEmail) {
      console.log("👤 Usuário encontrado por email:", userByEmail);
    } else {
      console.log("⚠️ Nenhum usuário encontrado pelo email.");
    }

    // Teste de busca por ID
    const userById = await User.findById(userId);
    if (userById) {
      console.log("👤 Usuário encontrado por ID:", userById);
    } else {
      console.log("⚠️ Nenhum usuário encontrado pelo ID.");
    }

    // Teste de adicionar XP
    await User.addXP(userId, 50);
    const updatedUser = await User.findById(userId);
    console.log("🎯 XP atualizado:", updatedUser.xp);
    
  } catch (err) {
    console.error("❌ Erro no User Model Test:", err);
  }
}

testUserModel();
