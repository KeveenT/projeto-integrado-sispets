const express = require("express");
const router = express.Router();

const { getAnimais, createAnimal, deleteAnimal } = require("../controllers/animaisController");

router.get("/animais", getAnimais);
router.post("/animal/new", createAnimal);
router.delete("/animal/delete/:id", deleteAnimal);

module.exports = router;