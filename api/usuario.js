const express = require('express');
const router = express.Router();
const metodos = require('./db/usuario');

router.post('/', (req, res) => {
    metodos.insertarUsuario(req.body.nombre,req.body.apellido, req.body.correo, req.body.contrasena, req.body.rol, req.body.carrera, res);
});

router.patch('/', (req, res) => {
    metodos.editarUsuario(req.body.ID,req.body.nombre,req.body.apellido, req.body.correo, req.body.contrasena, req.body.rolID, req.body.carreraID, res);
});

router.delete('/', (req, res) => {
    metodos.eliminarUsuario(req.body.ID, res);
});

router.get('/', (req, res) => {
    metodos.iniciarSesion(req.body.ID, req.body.contrasena, res);
});

module.exports = router;
