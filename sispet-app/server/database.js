const mongoose = require("mongoose");

const connectDB = () =>
    mongoose.connect(
    'mongodb+srv://sispet-master:uAIU0UB14KFRgNjx@cluster0.b1vn1pk.mongodb.net/sispet?retryWrites=true&w=majority'
    )
    .then(() => console.log("Database conectado"))
    .catch(console.error);

module.exports = connectDB;