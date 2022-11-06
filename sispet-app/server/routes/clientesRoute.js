const express = require("express");
const router = express.Router();

const { getClientes, createCliente, deleteCliente, updateCliente } = require("../controllers/clientesController");

router.put("/cliente/update/:id", updateCliente);
router.get("/clientes", getClientes);
router.post("/cliente/new", createCliente);
router.delete("/cliente/delete/:id", deleteCliente);

module.exports = router;