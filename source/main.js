// Definiendo variables
const express = require('express');
const cors = require('cors');
const path = require('path');

// Instancias
const appExpress = express();
const router = express.Router();

// Variables
const port = process.env.PUERTO || 9094;

// Implementando librerías
appExpress.use(express.json());
appExpress.use(cors());
appExpress.use("/static/", express.static(path.join(__dirname, './src/')) );

// Añadiendo funciones
appExpress.listen(
    port,
    err => {
        if (err) {
            return console.log("ERROR: ",err);
        }
        console.log("Servidor corriendo en el puerto: ", port);
    }
);

// Enrutando páginas
appExpress.get(
    '/servisoft',
    function(req, res) {
        res.sendFile(path.join(__dirname, '../dist/index.html'));
    }
);

appExpress.get(
    '/home',
    function(req, res) {
        res.sendFile(path.join(__dirname, '../dist/views/home.html'));
    }
);

appExpress.get(
    '/about',
    function(req, res) {
        res.sendFile(path.join(__dirname, '../dist/views/about.html'));
    }
);

appExpress.get(
    '/login',
    function(req, res) {
        res.sendFile(path.join(__dirname, '../dist/views/login.html'));
    }
);

appExpress.get(
    '*',
    function(req, res) {
        res.status(404).sendFile(path.join(__dirname, '../dist/views/404.html'));
    }
);