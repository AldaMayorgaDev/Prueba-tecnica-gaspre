const { Router } = require('express');

// ** import controllers
const { getEstacionByID } = require('../controllers/estaciones.controller');

const router = Router();

// ** Rutas y Metodos

router.get('/station/:id', getEstacionByID);

module.exports = router; 