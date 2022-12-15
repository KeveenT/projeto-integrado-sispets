const express = require("express");

const { getFuncionarios, createFuncionario, deleteFuncionario, updateFuncionario } = require("../controllers/funcionariosController");

const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

router.use(requireAuth);

router.put("/funcionario/update/:id", updateFuncionario);
router.get("/funcionarios", getFuncionarios);
router.post("/funcionario/new", createFuncionario);
router.delete("/funcionario/delete/:id", deleteFuncionario);

module.exports = router;