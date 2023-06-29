const express = require('express');
const router = express.Router();
const metodos = require('./db/asignatura');
//
router.post('/', (req, res) => {
    let info = metodos.insertarAsignatura(req.body.codigo,req.body.nombre,req.body.credito, res);
});
//
router.patch('/', (req, res) => {
    let info = metodos.editarAsignatura(req.body.ID,req.body.codigo,req.body.nombre,req.body.credito,req.body.prerrequisito, res);
});
//
router.delete('/', (req, res) => {
    let info = metodos.eliminarAsignatura(req.body.ID, res);
});
//
router.get('/estudiantes/cursadas', (req, res) => {
    const info = metodos.asignaturasCursadasEstudiante(req.body.ID, res);
});
//
router.get('/profesores/cursadas', (req, res) => {
    metodos.asignaturasCursadasProfesor(req.body.ID, res);
});

//
router.get('/profesores/estudiantes', (req, res) => {
    metodos.estudiantesENasignatura(req.body.pID,req.body.aID, res);
});

module.exports = router;