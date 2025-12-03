// src/controllers/exercicioController.js
const Exercicio = require("../models/Exercicio");
const Alternativa = require("../models/Alternativa");
const User = require("../models/User");

module.exports = {
    async listar(req, res) {
        try {
            const { licao_id } = req.params;
            const exercicios = await Exercicio.getByLicao(licao_id);
            res.json(exercicios);
        } catch (error) {
            res.status(500).json({ error: "Erro ao listar exercícios." });
        }
    },

    async criar(req, res) {
        try {
            const { licao_id, enunciado } = req.body;

            if (!licao_id || !enunciado) {
                return res.status(400).json({ error: "Dados incompletos." });
            }

            const id = await Exercicio.create(licao_id, enunciado);
            res.json({ id });
        } catch (error) {
            res.status(500).json({ error: "Erro ao criar exercício." });
        }
    },

    async responder(req, res) {
        try {
            const { alternativa_id, user_id } = req.body;

            if (!alternativa_id) {
                return res.status(400).json({ error: "ID da alternativa é obrigatório." });
            }

            const alternativa = await Alternativa.getById(alternativa_id);

            if (!alternativa) {
                return res.status(404).json({ error: "Alternativa não encontrada." });
            }

            const correta =
                alternativa.correta === 1 ||
                alternativa.correta === true ||
                alternativa.correta === "1";

            // Se tiver usuário, aplicar XP
            if (user_id) {
                const xpGanho = correta ? 10 : 2;

                await User.addXP(user_id, xpGanho);
            }

            res.json({
                correta,
                mensagem: correta ? "Resposta correta!" : "Resposta incorreta."
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erro ao responder exercício." });
        }
    }
};
