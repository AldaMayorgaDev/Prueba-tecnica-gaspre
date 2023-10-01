const express = require('express');
// ** Imports routes
const routerEstacion = require('./routes/estaciones.routes');

// ** Definicion del Server
const server = express()

server.use(express.json())

// ** Rutas
server.use('/api', routerEstacion);


server.use((req, res, next) => {
    res.status(404).json({
        "message": "Not Found",
    })
})


module.exports = server;