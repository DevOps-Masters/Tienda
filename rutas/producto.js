const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const eschema =mongoose.Schema

const eschemaproducto = new eschema({
    nombre: String,
    descripcion: String,
    valor: String,
    cantidadStock: String,
    idproducto: String
})

const ModeloProducto = mongoose.model('productos',eschemaproducto)
module.exports = router

//agregar producto
router.post('/agregarproducto',(req,res) =>{
    const nuevouproducto = new ModeloProducto({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        valor : req.body.valor,
        cantidadStock: req.body.cantidadStock,
        idproducto : req.body.idproducto
    })

    nuevouproducto.save(function(err){
        if (!err){
            res.send('Producto agregado Correctamente')
        } else{
            res.send(err)
        }
    })
})

//obtener todos los usuarios
router.get('/obtenerproductos', (req, res) =>{
    ModeloProducto.find({}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

//obtener data producto
router.post('/obtenerdataproducto', (req, res) =>{
    ModeloProducto.find({idproducto:req.body.idproducto}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

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

//Borrar producto
router.post('/borrarproducto',(req,res) =>{
    ModeloProducto.findOneAndDelete({idproducto:req.body.idproducto}, (err) => {
        if(!err){
            res.send('Producto Borrado Correctamente')
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

