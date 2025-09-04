const express = require('express')
const respuesta = require('../../red/respuestas');

const router = express.Router();
const controlador = require('./controlador');
// Linea removida: const { agregar } = require('../../db/mysql');

router.get('/', todos);
router.get('/:id', uno);
router.put('/', eliminar);
router.post('/', agregar); // Esta línea usa la función `agregar` definida abajo

async function todos(req, res, next) {
    try {
        const items = await controlador.todos();
        respuesta.success(req, res, items, 200)
    } catch (err) {
        next(err);
    }
}

async function uno(req, res, next) {
    try {
        const items = await controlador.uno(req.params.id);
        respuesta.success(req, res, items, 200)
    } catch (err) {
        next(err);
    }
}

async function agregar(req, res, next) {
    try {
        let mensaje;
        await controlador.agregar(req.body);
        if(req.body.id == 0){
            mensaje = 'item guardado con exito';
        } else {
            mensaje = 'item actualizado con exito';
        }
        respuesta.success(req, res, mensaje, 201);
    } catch (err) {
        next(err);
    }
}

async function eliminar(req, res, next) {
    try {
        await controlador.eliminar(req.body);
        respuesta.success(req, res, 'Item eliminado satisfactoriamente', 200);
    } catch (err) {
        next(err);
    }
}

// Removido este bloque duplicado:
// router.get('/', async function (req, res) {
//     const items = await controlador.todos();
//     respuesta.success(req, res, items, 200)
// });

module.exports = router;