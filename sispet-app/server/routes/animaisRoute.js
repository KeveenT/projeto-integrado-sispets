const express = require("express");
const router = express.Router();

const { getAnimais, createAnimal, deleteAnimal, updateAnimal } = require("../controllers/animaisController");

router.put("/animal/update/:id", updateAnimal);
router.get("/animais", getAnimais);
router.post("/animal/new", createAnimal);
router.delete("/animal/delete/:id", deleteAnimal);

module.exports = router;