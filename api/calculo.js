const express = require('express');
const router = express.Router();
const metodos = require('./db/calculo');

router.get('/indice', (req, res) => {
    let info = metodos.calculoIndiceAcademico(req.body.ID, req.body.periodo, res);
});

module.exports = router;
