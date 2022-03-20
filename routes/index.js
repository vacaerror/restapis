const express = require('express');
const router = express.Router();

const clienteController = require('../controllers/clienteController')



module.exports = function() {
    
    //Agregar nuevos clientes via POST

    router.post('/clientes', clienteController.nuevoCliente);

    //Obtener todos los clientes
    router.get('/clientes', clienteController.mostrarClientes);

    //Mostrar el ID del Cliente
    router.get('/clientes/:idCliente', clienteController.mostrarCliente);
   

    //Actualizar cliente
    router.put('/clientes/:idCliente', clienteController.actualizarCliente);

     //Eliminar registro
    router.delete('/clientes/:idCliente', clienteController.eliminarCliente);

    return router;
}