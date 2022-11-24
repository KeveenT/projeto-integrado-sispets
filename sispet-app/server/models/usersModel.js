const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    senha: {
        type: String,
        required: true,
    }
});

//método estático para o signup
userSchema.statics.signup = async function(email, senha) {

    //validação
    if (!email || !senha) {
        throw Error("Todos os campos devem ser preenchidos")
    }
    if (!validator.isEmail(email)) {
        throw Error("Email não é válido")
    }
    if (!validator.isStrongPassword(senha)) {
        throw Error("Senha não é forte o suficiente")
    }

    const exists = await this.findOne({ email })

    if (exists) {
        throw Error("Email já em uso")
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(senha, salt)

    const user = await this.create({ email, senha: hash })

    return user
};


//método estático para o login
userSchema.statics.login = async function(email, senha) {

    if (!email || !senha) {
        throw Error("Todos os campos devem ser preenchidos")
    }

    const user = await this.findOne({ email })

    if (!user) {
        throw Error("Email incorreto")
    }

    const match = await bcrypt.compare(senha, user.senha)

    if (!match) {
        throw Error("Senha incorreta")
    }

    return user
}

const usersModel = mongoose.model("Users", userSchema);
module.exports = usersModel;