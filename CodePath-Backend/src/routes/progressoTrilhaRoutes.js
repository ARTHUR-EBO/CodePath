const express = require("express");
const router = express.Router();
const progressoTrilhaController = require("../controllers/progressoTrilhaController");

// buscar progresso da trilha (user_id, trilha_id)
router.get("/:user_id/:trilha_id", progressoTrilhaController.getProgresso);

module.exports = router;
