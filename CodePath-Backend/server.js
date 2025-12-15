const express = require("express");
const cors = require("cors");
require("dotenv").config();

const userRoutes = require("./src/routes/userRoutes");
const trilhaRoutes = require("./src/routes/trilhaRoutes");
const licaoRoutes = require("./src/routes/licaoRoutes");
const exercicioRoutes = require("./src/routes/exercicioRoutes");
const alternativaRoutes = require("./src/routes/alternativaRoutes");
const progressoLicaoRoutes = require("./src/routes/progressoLicaoRoutes");
const progressoTrilhaRoutes = require("./src/routes/progressoTrilhaRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// 🟢 AQUI: libera a pasta public
app.use(express.static("public"));

app.get("/", (req, res) => res.json({ message: "API CodePath funcionando!" }));

app.use("/api/user", userRoutes);
app.use("/api/trilhas", trilhaRoutes);
app.use("/api/licoes", licaoRoutes);
app.use("/api/exercicios", exercicioRoutes);
app.use("/api/alternativas", alternativaRoutes);
app.use("/api/progresso_licao", progressoLicaoRoutes);
app.use("/api/progresso_trilha", progressoTrilhaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Servidor rodando na porta " + PORT));
