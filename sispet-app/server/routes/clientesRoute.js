const express = require("express");

const { getClientes, createCliente, deleteCliente, updateCliente } = require("../controllers/clientesController");

const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

router.use(requireAuth);

router.put("/cliente/update/:id", updateCliente);
router.get("/clientes", getClientes);
router.post("/cliente/new", createCliente);
router.delete("/cliente/delete/:id", deleteCliente);

module.exports = router;