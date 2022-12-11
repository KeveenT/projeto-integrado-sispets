const express = require("express");
const cors = require('cors');

require('dotenv').config();

const connectDB = require("./database");
const animaisRoute = require("./routes/animaisRoute");
const clientesRoute = require("./routes/clientesRoute");
const usersRoute = require("./routes/usersRoute");

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.use("/api", usersRoute);
app.use("/api", animaisRoute);
app.use("/api", clientesRoute);

//PORT = 5000;
app.listen(process.env.PORT || 5000, () => {
    console.log("Servidor está rodando")
});