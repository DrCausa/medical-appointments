const mysql = require('mysql');
const config = require('../config')

const dbconfig ={
    host: config.mysql.host, 
    user: config.mysql.user,
    password: config.mysql.password, 
    database: config.mysql.database,
}

let conexion;

function conMySQL(){
    conexion = mysql.createConnection(dbconfig);

    conexion.connect((err) => {
        if(err){
            console.log('[db err]', err);
            setTimeout(conMySQL, 200);
        } else {
            console.log('DB conectada')
        }
    })

    conexion.on('error', err => {
        console.log('[db err]', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            conMySQL();
        } else {
            throw err;
        }
    })
}

conMySQL();

function todos(tabla){
    return new Promise((resolve, reject) => {
        conexion.query(`SELECT * FROM ${tabla}`, (error, resultado) => {
            return error ? reject(error) : resolve(resultado);
        })
    });
}

function uno(tabla, id){
    return new Promise((resolve, reject) => {
        conexion.query(`SELECT * FROM ${tabla} WHERE id=${id}`, (error, resultado) => {
            return error ? reject(error) : resolve(resultado);
        })
    });
}

function insertar(tabla, data){
    return new Promise((resolve, reject) => {
        conexion.query(`INSERT INTO ${tabla} SET ?`, data, (error, resultado) => {
            return error ? reject(error) : resolve(resultado);
        })
    });
}

function actualizar(tabla, data){
    return new Promise((resolve, reject) => {
        conexion.query(`UPDATE ${tabla} SET ? WHERE ID = ?`, [data, data.id], (error, resultado) => {
            return error ? reject(error) : resolve(resultado);
        })
    });
}

function agregar(tabla, data){
    if(data && data.id == 0){
        return insertar(tabla, data);
    } else {
        return actualizar(tabla, data);
    }
}

function eliminar(tabla, data){
    return new Promise((resolve, reject) => {
        conexion.query(`DELETE FROM ${tabla} WHERE id = ?`, data.id, (error, resultado) => {
            return error ? reject(error) : resolve(resultado);
        })
    });
}

module.exports = {
    todos, 
    uno,
    agregar, 
    eliminar,
}