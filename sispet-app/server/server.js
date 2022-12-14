const express = require("express");
const cors = require('cors');

require('dotenv').config();

const connectDB = require("./database");
const animaisRoute = require("./routes/animaisRoute");
const clientesRoute = require("./routes/clientesRoute");
const fornecedoresRoute = require("./routes/fornecedoresRoute");
const funcionariosRoute = require("./routes/funcionariosRoute");
const vacinasRoute = require("./routes/vacinasRoute");
const usersRoute = require("./routes/usersRoute");

const calendarRoute = require("./controllers/calendarController");

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.use("/api", usersRoute);
app.use("/api", animaisRoute);
app.use("/api", clientesRoute);
app.use("/api", fornecedoresRoute);
app.use("/api", funcionariosRoute)
app.use("/api", vacinasRoute);
app.use("/api/calendar", calendarRoute);

//PORT = 5000;
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Servidor está rodando na porta:${port}`)
});