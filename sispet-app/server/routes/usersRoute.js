const express = require("express");
const router = express.Router();

const { loginUser, signupUser } = require("../controllers/userController");

//login route
router.post('/user/login', loginUser);

//signup route
router.post('/user/signup', signupUser);

module.exports = router;