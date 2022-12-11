const express = require("express");

const { getAnimais, createAnimal, deleteAnimal, updateAnimal } = require("../controllers/animaisController");

const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

router.use(requireAuth);

router.put("/animal/update/:id", updateAnimal);
router.get("/animais", getAnimais);
router.post("/animal/new", createAnimal);
router.delete("/animal/delete/:id", deleteAnimal);

module.exports = router;