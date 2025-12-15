const express = require("express");
const router = express.Router();
const trilhaController = require("../controllers/trilhaController");

// GET - listar trilhas
router.get("/", trilhaController.listar);

// POST - criar trilha
router.post("/", trilhaController.criar);

module.exports = router;