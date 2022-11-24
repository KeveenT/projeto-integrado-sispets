const Users = require("../models/usersModel");
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
    return jwt.sign({_id}, 'projetointegradopuckeveentenereli', { expiresIn: '30d' })
};

//login user
const loginUser = async (req, res) => {
    
    const {email, senha} = req.body;

    try {
        const user = await Users.login(email, senha);

        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch (err) {
        res.status(400).json({error: err.message});
    }
};

//signup user
const signupUser = async (req, res) => {

    const {email, senha} = req.body;

    try {
        const user = await Users.signup(email, senha);

        //cria token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch (err) {
        res.status(400).json({error: err.message});
    }
};

module.exports = { loginUser, signupUser };