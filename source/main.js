// Definiendo variables
const express = require('express');
const cors = require('cors');
const appExpress = express();
const port = process.env.PUERTO || 9094;

// Implementando librerías
appExpress.use(express.json());
appExpress.use(cors());

// Añadiendo funciones
appExpress.listen(
    port,
    function() {
        console.log("Servidor funcionando en el puerto: ", port);
    }
);