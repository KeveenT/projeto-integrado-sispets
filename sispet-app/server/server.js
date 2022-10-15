const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");

const connectDB = require("./database");
const animaisRoute = require("./routes/animaisRoute");

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.use("/api", animaisRoute);

PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`)
});