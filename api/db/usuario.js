const sql = require('mssql');

async function iniciarSesion(ID, contrasena, res){
    await sql.connect(process.env.Server)

    let pool = new sql.Request()
    await pool.input('ID',ID);
    await pool.input('contrasena',contrasena);

    let result = await pool.execute('iniciarSesion');
    
    res.status(200).json(result.recordset);
}
async function insertarUsuario(nombre, apellido, correo, contrasena, rolID, carreraID, res) {
    await sql.connect(process.env.Server)

    let pool = new sql.Request()
    await pool.input('nombre',nombre);
    await pool.input('apellido',apellido);
    await pool.input('correo',correo);
    await pool.input('contrasena',contrasena);
    await pool.input('rolID',rolID);
    await pool.input('carreraID',carreraID);

    let result = await pool.execute('insertarUsuario');
    
    res.status(200).json(result.recordset);
}

async function editarUsuario(ID, nombre, apellido, correo, contrasena, res) {
    await sql.connect(process.env.Server)

    let pool = new sql.Request();
    await pool.input('ID',ID);
    await pool.input('nombre',nombre);
    await pool.input('apellido',apellido);
    await pool.input('correo',correo);
    await pool.input('contrasena',contrasena);

    let result = await pool.execute('editarUsuario');
    
    res.status(200).json(result.recordset);
}

async function eliminarUsuario(ID, res) {
    await sql.connect(process.env.Server)

    let pool = new sql.Request()
    let result = await pool.input('ID',ID).execute('eliminarUsuario');
    
    res.status(200).json(result.recordset);
}

module.exports = {
    insertarUsuario : insertarUsuario,
    editarUsuario : editarUsuario,
    eliminarUsuario : eliminarUsuario,
    iniciarSesion : iniciarSesion
};