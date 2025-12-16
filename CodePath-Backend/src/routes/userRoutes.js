const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const upload = require("../config/upload");


router.post("/register", userController.register);
router.post("/login", userController.login);

// Novo endpoint
router.get("/:id", userController.getUserById);
router.post("/:id/foto",upload.single("foto"),userController.uploadFoto);
router.delete("/:id/foto", userController.removeFoto);


module.exports = router; 