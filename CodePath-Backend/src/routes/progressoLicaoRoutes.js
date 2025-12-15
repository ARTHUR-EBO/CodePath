const express = require("express");
const router = express.Router();
const progressoLicaoController = require("../controllers/progressoLicaoController");

// marcar lição como concluída (via API)
router.post("/concluir", progressoLicaoController.marcarConcluidaRoute);

module.exports = router;
