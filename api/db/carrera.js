const sql = require('mssql');

async function insertarCarrera(carrera, res) {
    await sql.connect(process.env.Server)

    let pool = new sql.Request();
    let result = await pool.input('nombre',carrera).execute('insertarCarrera');
    
    res.status(200).json(result.recordset);
}

async function eliminarCarrera(ID, res) {
    await sql.connect(process.env.Server)

    let pool = new sql.Request()
    let result = await pool.input('ID',ID).execute('eliminarCarrera');
    
    res.status(200).json(result.recordset);
}

module.exports = {
    insertarCarrera : insertarCarrera,
    eliminarCarrera : eliminarCarrera
};