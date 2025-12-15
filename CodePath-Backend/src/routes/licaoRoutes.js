const express = require("express");
const router = express.Router();
const licaoController = require("../controllers/licaoController");

// ✅ ROTAS MAIS ESPECÍFICAS PRIMEIRO
router.get("/trilha/:trilha_id", licaoController.listarPorTrilha);

// Buscar lição por ID
router.get("/:id", licaoController.buscarPorId);

// Criar lição
router.post("/", licaoController.criar);

module.exports = router;
