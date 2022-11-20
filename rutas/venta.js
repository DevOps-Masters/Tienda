const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const eschema =mongoose.Schema

const eschemaventa = new eschema({
    fecha: {type: Date, default: Date.now()},
    valor: String,
    idventa: String
})

const ModeloVenta = mongoose.model('ventas',eschemaventa)
module.exports = router

//agregar venta
router.post('/agregarventa',(req,res) =>{
    const nuevaventa = new ModeloVenta({
        //fecha:req.body.fecha,
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
