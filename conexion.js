const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/devopsmaster');

const objetobd = mongoose.connection

objetobd.on('connected', () => {console.log('Conexion Correcta a mongoDB')})
objetobd.on('error  ', () => {console.log('Error en la conexión a mongoDB')})

module.exports = mongoose