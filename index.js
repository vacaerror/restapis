const express = require('express');
const routes = require('./routes')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Conectar mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/restapis', {
    useNewUrlParser: true
});

//Crear el Servidor
const app = express();

//Habilitar el bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Rutas de la app
app.use('/', routes());


//Puerto para habilitar
app.listen(5000);