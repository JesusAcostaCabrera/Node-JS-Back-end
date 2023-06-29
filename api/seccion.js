const express = require('express');
const router = express.Router();
const metodos = require('./db/seccion');
//
router.post('/', (req, res) => {
    metodos.insertarSeccion(req.body.numero,req.body.periodo,req.body.profesor,req.body.asignatura, res);
});
//
router.patch('/', (req, res) => {
    metodos.editarSeccion(req.body.ID, req.body.horarioA, req.body.horarioB, res);
});
//
router.delete('/', (req, res) => {
    metodos.eliminarSeccion(req.body.ID, res);
});
//
router.post('/horario', (req, res) => {
    metodos.asignarHorario(req.body.horario,req.body.seccion, res);
});
//
router.post('/horario/estudiante', (req, res) => {
    metodos.asignarEstudianteSeccion(req.body.estudiante, req.body.seccion, res);
});
//
router.patch('/horario/estudiante', (req, res) => {
    metodos.actualizarEstudianteSeccion(req.body.estudiante, req.body.seccionA, req.body.seccionB, res);
});
//
router.delete('/horario/estudiante', (req, res) => {
    metodos.removerEstudianteSeccion(req.body.estudiante, req.body.seccion, res);
});
//
router.post('/horario/estudiante/calificacion', (req, res) => {
    metodos.asignarCalificacion(req.body.calificacion,req.body.eID,req.body.sID, res);
});
module.exports = router;