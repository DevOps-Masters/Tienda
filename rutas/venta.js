const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const eschema =mongoose.Schema

const eschemaventa = new eschema({
    fecha: String,
    valor: String,
    idventa: String
})

const ModeloVenta = mongoose.model('ventas',eschemaventa)
module.exports = router

//agregar producto
router.post('/agregarventa',(req,res) =>{
    const nuevaventa = new ModeloVenta({
        fecha:req.body.fecha,
        valor : req.body.valor,
        idventa : req.body.idventa
    })

    nuevaventa.save(function(err){
        if (!err){
            res.send('Venta creada Correctamente')
        } else{
            res.send(err)
        }
    })
})

//obtener todas las ventas
router.get('/obtenerventas', (req, res) =>{
    ModeloVenta.find({}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

//obtener data venta
router.post('/obtenerdataventa', (req, res) =>{
    ModeloVenta.find({idventa:req.body.idventa}, function(docs, err){
        if(!err){
            res.send(docs)
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

*/