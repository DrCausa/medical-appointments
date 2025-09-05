const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const config = require('./config');

const usuarios = require('./modulos/usuarios/rutas')
const citas = require('./modulos/citas/rutas')
const error = require('./red/errorres')

const app = express();

//Middlware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


app.set('port', config.app.port)

app.use('/api/usuarios', usuarios)
app.use('/api/citas', citas)
app.use(error);

module.exports = app;
