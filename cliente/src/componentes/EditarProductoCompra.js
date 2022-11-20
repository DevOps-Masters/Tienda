import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router'
import axios from 'axios'
import Swal from 'sweetalert2'

function EditarProducto(){

    const params = useParams()
    
    //Hooks
    const[nombre, setNombre] = useState('')
    const[descripcion, setDescripcion] = useState('')
    const[valor, setValor] = useState('')
    const[cantidadStock, setcantidadStock] = useState('')

    //volver atras
    const navegar =useNavigate

    useEffect(() => {
        axios.post('/api/producto/obtenerdataproducto', {idproducto: params.idproducto}).then(res => {
            console.log(res.data[0])
            const dataproducto = res.data[0]
            setNombre(dataproducto.nombre)
            setDescripcion(dataproducto.descripcion)
            setValor(dataproducto.valor)
            setcantidadStock(dataproducto.cantidadStock)
        })
    }, [])
    
//Función que actualiza

function editarProducto(){
    const actualizarproducto = {
        nombre : nombre,
        descripcion:descripcion,
        valor: valor,
        cantidadStock: cantidadStock,
        idproducto: params.idproducto
    }

    //Hacer la peticion usando axios
    axios.post('/api/producto/actualizarproducto',actualizarproducto)
    .then(res =>{
        console.log(res.data)
        Swal.fire('Felicidades', 'El producto fue editado')
        navegar('/')
    })
    .then(err => {console.log(err)})
}
    return(
        <div className = 'container'>
            <div className = 'row'>
                <h2 className='mt-4'> Editar un Producto</h2> 
            </div>   
            <div className = 'row'> 
                <div className = 'col-sm-6 offset-3'>
                    <div className = 'mb-3'>
                        <label htmlFor='nombre' className='form-label'>Nombre</label>
                        <input type='text' className='form-control' value = {nombre} onChange={(e) => {setNombre(e.target.value)}}></input>
                    </div>
                    <div className = 'mb-3'>
                        <label htmlFor='descripcion' className='form-label'>Descripción</label>
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

                    <button onClick={editarProducto} className='btn btn-success'>Editar Producto</button>
                </div>
            </div>     
        </div>
    )
    
}

export default EditarProducto