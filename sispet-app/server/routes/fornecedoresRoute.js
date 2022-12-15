const express = require("express");

const { getFornecedores, createFornecedor, deleteFornecedor, updateFornecedor } = require("../controllers/fornecedoresController");

const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

router.use(requireAuth);

router.put("/fornecedor/update/:id", updateFornecedor);
router.get("/fornecedores", getFornecedores);
router.post("/fornecedor/new", createFornecedor);
router.delete("/fornecedor/delete/:id", deleteFornecedor);

module.exports = router;