const express = require("express");
const router = express.Router();
const licaoController = require("../controllers/licaoController");

// Listar lições por trilha
router.get("/:trilha_id", licaoController.listarPorTrilha);

// Criar lição
router.post("/", licaoController.criar);

module.exports = router;
