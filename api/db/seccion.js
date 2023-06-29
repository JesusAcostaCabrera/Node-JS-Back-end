const sql = require('mssql');

async function insertarSeccion(numero, periodo, profesorID, asignaturaID, res) {
    await sql.connect(process.env.Server)

    let pool = new sql.Request();
    await pool.input('numero',numero);
    await pool.input('periodo',periodo);
    await pool.input('profesorID',profesorID);
    await pool.input('asignaturaID',asignaturaID);
    let result = await pool.execute('insertarSeccion');
    
    res.status(200).json({
        message: 'Consulta Realizada.'
    })
}

async function editarSeccion(ID, AhorarioID, BhorarioID, res) {
    await sql.connect(process.env.Server)

    let pool = new sql.Request();
    await pool.input('ID',ID);
    await pool.input('AhorarioID',AhorarioID);
    await pool.input('BhorarioID',BhorarioID);
    let result = await pool.execute('editarSeccion');
    
    res.status(200).json({
        message: 'Consulta Realizada.'
    });
}

async function eliminarSeccion(ID, res) {
    await sql.connect(process.env.Server)

    let pool = new sql.Request();
    await pool.input('ID',ID);
    let result = await pool.execute('eliminarSeccion');
    
    res.status(200).json({
        message: 'Consulta Realizada.'
    });
}

async function asignarCalificacion(calificacion, eID, sID, res){
    await sql.connect(process.env.Server);

    let pool = new sql.Request();

    await pool.input('calificacion',calificacion);
    await pool.input('eID', eID);
    await pool.input('sID', sID);

    let result = await pool.execute('asignarCalificacion');

    res.status(200).json(result.recordset);
}

async function asignarHorario(horario, seccion, res) {
    await sql.connect(process.env.Server);

    let pool = new sql.Request();
    await pool.input('horarioID',horario);
    await pool.input('seccionID',seccion);
    let result = await pool.execute('insertarSeccionHorario');
    
    res.status(200).json(result.recordset);
}

async function asignarEstudianteSeccion(estudianteID, seccionID, res) {
    await sql.connect(process.env.Server)

    let pool = new sql.Request();
    await pool.input('estudianteID',estudianteID);
    await pool.input('seccionID',seccionID);
    let result = await pool.execute('insertarEstudianteSeccion');
    
    res.status(200).json(result.recordset);
}

async function actualizarEstudianteSeccion(estudianteID, seccionAntesID, seccionDespuesID, res) {
    await sql.connect(process.env.Server)

    let pool = new sql.Request();
    await pool.input('estudianteID',estudianteID);
    await pool.input('seccionAID',seccionAntesID);
    await pool.input('seccionBID',seccionDespuesID);
    let result = await pool.execute('editarEstudianteSeccion');
    
    res.status(200).json(result.recordset);
}

async function removerEstudianteSeccion(estudianteID, seccionID, res) {
    await sql.connect(process.env.Server)

    let pool = new sql.Request();
    await pool.input('estudianteID',estudianteID);
    await pool.input('seccionID',seccionID);
    let result = await pool.execute('eliminarEstudianteSeccion');
    
    res.status(200).json(result.recordset);
}

module.exports = {
    insertarSeccion : insertarSeccion,
    editarSeccion : editarSeccion,
    eliminarSeccion : eliminarSeccion,
    asignarEstudianteSeccion : asignarEstudianteSeccion,
    actualizarEstudianteSeccion : actualizarEstudianteSeccion,
    removerEstudianteSeccion : removerEstudianteSeccion,
    asignarHorario : asignarHorario,
    asignarCalificacion : asignarCalificacion
};