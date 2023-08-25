const express = require("express");
const router = express.Router();

// Se agrega el controlador de rutas
let routeController = require(`./routeController.js`);
router.use(routeController);

module.exports = router;