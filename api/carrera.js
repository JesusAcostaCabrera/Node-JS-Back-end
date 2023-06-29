const express = require('express');
const router = express.Router();
const metodos = require('./db/carrera');

router.post('/', (req, res) => {
    let info = metodos.insertarCarrera(req.body.nombre);
});

router.delete('/', (req, res) => {
    let info = metodos.eliminarCarrera(req.body.ID);
});

module.exports = router;