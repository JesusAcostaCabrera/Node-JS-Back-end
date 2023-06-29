const sql = require('mssql');

async function calculoIndiceAcademico(ID, trimestre, res) {
    await sql.connect(process.env.Server)

    let pool = new sql.Request();
    await pool.input('ID',ID);
    await pool.input('trimestre',trimestre);
    let result = await pool.execute('calculoIndice');
    
    await res.status().json(result.recordset);
}

module.exports = {
    calculoIndiceAcademico : calculoIndiceAcademico
};