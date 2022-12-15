const express = require("express");

const { getVacinas, createVacina, deleteVacina, updateVacina } = require("../controllers/vacinasController");

const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

router.use(requireAuth);

router.put("/vacina/update/:id", updateVacina);
router.get("/vacinas", getVacinas);
router.post("/vacina/new", createVacina);
router.delete("/vacina/delete/:id", deleteVacina);

module.exports = router;