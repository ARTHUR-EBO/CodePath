const express = require("express");
const router = express.Router();
const exercicioController = require("../controllers/exercicioController");

// listar por lição
router.get("/:licao_id", exercicioController.listar);

// criar exercício
router.post("/", exercicioController.criar);

// responder exercício (passa alternativa_id e opcional user_id)
router.post("/responder", exercicioController.responder);

module.exports = router;
