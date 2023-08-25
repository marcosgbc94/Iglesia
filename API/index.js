const express = require("express");
const cors = require("cors");

const app = express()
app.use(cors());
app.use(express.json());

// Se incluye el archivo de rutas
const routes = require('./routes/route.js')
app.use('/', routes);

// Se incluye archivo de configuración
const config = require("./config/config.js");

// Se inicializa el oyente en un determinado puerto
app.listen(config.PORT);