const sql = require('mssql');

async function asignaturasCursadasEstudiante(ID, res){
    await sql.connect(process.env.Server)

    let pool = new sql.Request();
    await pool.input('ID', ID);
    let result = await pool.execute('asignaturasCursadasEstudiante');

    res.status(200).json(result.recordset);
}
async function asignaturasCursadasProfesor(ID, res) {
    await sql.connect(process.env.Server)

    let pool = new sql.Request();
    await pool.input('ID',ID);
    let result = await pool.execute('asignaturasCursadasProfesor');
    await res.status(200).json(result.recordset);
}

async function insertarAsignatura(codigo, nombre,credito, res) {
    await sql.connect(process.env.Server)

    let pool = new sql.Request();
    await pool.input('codigo',codigo);
    await pool.input('nombre',nombre);
    await pool.input('credito',credito);
    let result = await pool.execute('insertarAsignatura');

    await res.status(200).json({
        message: "Consulta realizada."
    });
}

async function editarAsignatura(ID, codigo, nombre,credito, prerrequisito, res) {
    await sql.connect(process.env.Server, res)

    let pool = new sql.Request();
    await pool.input('ID',ID);
    await pool.input('codigo',codigo);
    await pool.input('nombre',nombre);
    await pool.input('credito',credito);
    await pool.input('prerrequisitoID',prerrequisito);
    let result = await pool.execute('editarAsignatura');
    
    await res.status(200).json({
        message: "Consulta realizada."
    });
}

async function eliminarAsignatura(ID, res) {
    await sql.connect(process.env.Server)

    let pool = new sql.Request();
    await pool.input('ID',ID);
    let result = await pool.execute('eliminarAsignatura');
    
    await res.status(200).json({
        message: "Consulta realizada."
    });
}

async function estudiantesAsignatura(pID, aID, res){
    try{
        await sql.connect(process.env.Server);
        const request = new sql.Request();

        output = await request
        .input('asignaturaID',aID)
        .input('profesorID',pID)
        .execute('mostrarEstudiantesAsignatura');
        console.dir(output);
        
        await res.status(200).json(output.recordset);
    } catch(err){
        console.log(err);
    }
}
// async function estudiantesENasignatura(profesorID, asignaturaID) {
//     let conn = await sql.connect(process.env.Server)

//     let output = await conn
//             .request()
//             .input('profesorID',sql.Int,profesorID)
//             .input('asignaturaID',sql.Int,asignaturaID)
//             .execute('mostrarEStudiantesAsignatura');
//     sql.close();
//     // let pool = new sql.Request();
//     // await pool.input('profesorID',profesorID);
//     // await pool.input('asignaturaID',asignaturaID);
//     // let result = await pool.execute('mostrarEstudiantesAsignatura');
//     console.log(output.recordset);
//     return output.recordset;
// }

module.exports = {
    asignaturasCursadasEstudiante : asignaturasCursadasEstudiante,
    asignaturasCursadasProfesor : asignaturasCursadasProfesor,
    insertarAsignatura : insertarAsignatura,
    eliminarAsignatura : eliminarAsignatura,
    editarAsignatura : editarAsignatura,
    estudiantesENasignatura : estudiantesAsignatura
}