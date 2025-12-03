const express = require("express");
const router = express.Router();
const alternativaController = require("../controllers/alternativaController");

// listar alternativas de um exercício
router.get("/:exercicio_id", alternativaController.listar);

// criar alternativa
router.post("/", alternativaController.criar);

module.exports = router;
