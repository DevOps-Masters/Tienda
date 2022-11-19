const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const eschema =mongoose.Schema

const eschemacarrito = new eschema({
    nombre: String,
    valor: String,
    cantidadStock: String,
    cantidadCompra: String,
    idcarrito: String
})

const ModeloCarrito = mongoose.model('carritos',eschemacarrito)
module.exports = router


//agregar producto
router.post('/agregarcarrito',(req,res) =>{
    const nuevocarrito = new ModeloCarrito({
        nombre: req.body.nombre,
        valor : req.body.valor,
        cantidadStock: req.body.cantidadStock,
        cantidadCompra: req.body.cantidadCompra,
        idcarrito : req.body.idcarrito
    })

    nuevocarrito.save(function(err){
        if (!err){
            res.send('Agregado Correctamente al Carrito')
        } else{
            res.send(err)
        }
    })
})


//obtener todos los  productos para el carrito
router.get('/obtenercarritos', (req, res) =>{
    ModeloCarrito.find({}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

//obtener data carrito
router.post('/obtenerdatacarrito', (req, res) =>{
    ModeloCarrito.find({idcarrito:req.body.idcarrito}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

//Borrar producto
router.post('/borrarcarrito',(req,res) =>{
    ModeloCarrito.findOneAndReplace ({idcarrito:req.body.idcarrito}, (err) => {
        if(!err){
            res.send('Compra cancelada exitosamente')
        }else{
            res.send(err)
        }
    })
})

//Drop Collection
router.delete('/borrarcarritoAll', (req,res) =>{
    ModeloCarrito.dropCollection("carritos",(err) => {
        if(!err){
            res.send('Compra cancelada exitosamente')
        }else{
            res.send(err)
        }
    })
})


/*
//actualizar producto
router.post('/actualizarproducto',(req,res) =>{
    ModeloProducto.findOneAndUpdate({idproducto:req.body.idproducto},{
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        valor: req.body.valor,
        cantidadStock: req.body.cantidadStock,
    },(err) => {
        if(!err){
            res.send('Producto Actualizado Correctamente')
        }else{
            res.send(err)
        }
    })
})

//agregar a carrito
router.post('/agregarcarrito', (req, res) =>{
    ModeloProducto.find({idproducto:req.body.idproducto}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

//obtener arreglo
router.post('/obtenerdataproducto', (req, res) =>{
    ModeloProducto.find({idproducto:req.body.idproducto}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})
*/
