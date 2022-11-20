import React, { useState } from 'react'
import uniquid from 'uniqid'
import axios from 'axios'
import Swal from 'sweetalert2'

function AgregarProducto(){

//Hooks
const[nombre, setNombre] = useState('')
const[descripcion, setDescripcion] = useState('')
const[valor, setValor] = useState('')
const[cantidadStock, setcantidadStock] = useState('')

    function agregarProducto(){
         var producto = {
            nombre: nombre,
            descripcion: descripcion,
            valor: valor,
            cantidadStock: cantidadStock,
            idproducto: uniquid()
         }
         console.log(producto)

         axios.post('/api/producto/agregarproducto',producto)
         .then(res =>{
            //alert(res.data)
            Swal.fire('Felicidades', 'Se creo el producto')
         })
         .then(err => {console.log(err)})
    }

    return(
        <div className = 'container'>
            <div className = 'row'>
                <h2 className='my-3'> Agregar un Producto</h2> 
            </div>   
            <div className = 'row'> 
                <div className = 'col-sm-6 offset-3'>
                    <div className = 'mb-3'>
                        <label htmlFor='nombre' className='form-label'>Nombre</label>
                        <input type='text' className='form-control' value = {nombre} onChange={(e) => {setNombre(e.target.value)}}></input>
                    </div>
                    <div className = 'mb-3'>
                        <label htmlFor='descripcion' className='form-label'>Descripcion</label>
                        <input type='text' className='form-control' value = {descripcion} onChange={(e) => {setDescripcion(e.target.value)}}></input>
                    </div>
                    <div className = 'mb-3'>
                        <label htmlFor='valor' className='form-label'>Valor</label>
                        <input type='text' className='form-control' value = {valor} onChange={(e) => {setValor(e.target.value)}}></input>
                    </div>
                    <div className = 'mb-3'>
                        <label htmlFor='cantidadStock' className='form-label'>Cantidad en Stock</label>
                        <input type='text' className='form-control' value = {cantidadStock} onChange={(e) => {setcantidadStock(e.target.value)}}></input>
                    </div>
                    <button onClick={agregarProducto} className='btn btn-success'>Guardar Producto</button>
                </div>
            </div>
        </div>
    )
}
export default AgregarProducto