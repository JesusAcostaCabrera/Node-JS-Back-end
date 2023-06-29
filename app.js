const morgan = require('morgan');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const carreraRuta = require('./api/carrera');
const rolUsuario = require('./api/usuario');
const rolSeccion = require('./api/seccion');
const rolAsignatura = require('./api/asignatura');
const rolCalculo = require('./api/calculo');

// Setting up data types to receive
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Setting up headers for people to use my API outside of my Server
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 
//     'Origin, X-Requested-With, Content-Type, Accept, Authorization');

//     if(req.method === 'OPTIONS') {
//         res.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET');
//         return res.status(200).json({});
//     }
//     next();
// });

// Rutas
app.use('/carreras',carreraRuta);
app.use('/usuarios',rolUsuario);
app.use('/secciones',rolSeccion);
app.use('/asignaturas',rolAsignatura);
app.use('/calculo',rolCalculo);

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.status (err.status || 500);
    res.json({
        error:{
            message: err.message
        }
    })
});

module.exports = app;