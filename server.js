const express = require('express')
const app = express()

//Importar conexion mongoDB
const archivoBD = require('./conexion')

//Importación del archivo de rutas y modelo usuario
const rutausuario = require('./rutas/usuario')
const rutaproducto = require('./rutas/producto')
const rutaventa = require('./rutas/venta')
const rutacarrito = require('./rutas/carrito')

// Importar body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/usuario', rutausuario)
app.use('/api/producto', rutaproducto)
app.use('/api/venta', rutaventa)
app.use('/api/carrito', rutacarrito)

app.get('/', (req, res) =>{
    res.end('Bienvenidos al Servidor backend Node.js. Corriendo...')
})

//configurar servidor basico
app.listen(5000, function(){ 
    console.log('El servidor NODEMON esta corriendo correctamente')
})
