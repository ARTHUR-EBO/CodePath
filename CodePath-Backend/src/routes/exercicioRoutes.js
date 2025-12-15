const express = require("express");
const router = express.Router();
const exercicioController = require("../controllers/exercicioController");

// 🔹 listar exercícios por lição (EXATA como o frontend espera)
router.get("/licao/:licao_id", exercicioController.listar);

// 🔹 responder exercício
router.post("/responder", exercicioController.responder);

// 🔹 criar exercício
router.post("/", exercicioController.criar);

module.exports = router;
