const { request } = require('express');
const Clientes = require('../models/Clientes');

//Agregar un nuevo cliente
exports.nuevoCliente = async (req, res) => {
        const cliente = new Clientes(req.body);
        //console.log(req.body);

        try {
                //Almacenar el registro
                await cliente.save();
                res.json({ mensaje: 'Se agrego un nuevo cliente'});

        } catch (error) {
            console.log(error);   
            next();
        }

}


//Mostrar todos los clientes

exports.mostrarClientes = async(req,res) => {

        try {
                const clientes = await Clientes.find({});
                res.json(clientes);         
        } catch (error) {
                console.log(error);
                next();
        }


}

//Mostrar cliente x ID


exports.mostrarCliente = async(req, res, next) => {

        const cliente = await Clientes.findById(req.params.idCliente);     
        
        if(!cliente) {
                res.json({ mensaje: 'Ese cliente no existe'});
                next();
        }
        //Mostrar el cliente
        res.json(cliente);


}


exports.actualizarCliente = async (req, res, next) => {

        try {
              const cliente = await Clientes.findOneAndUpdate({ _id : req.params.idCliente}, 
                req.body, {
                        new : true
                });
                res.json(cliente);
        } catch (error) {
             console.log(error);
             next();   
        }


}

exports.eliminarCliente = async (req, res, next) => {

        try {
                await Clientes.findOneAndDelete({_id : req.params.idCliente});
                res.json({mensaje : 'Se ha eliminado el cliente'});
        } catch (error) {
                console.log(error);
                next();
        }

}