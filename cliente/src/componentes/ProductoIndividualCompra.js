import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router'
import Swal from 'sweetalert2'


function ProductoIndividual({producto}){

    const[cantidadCompra, setcantidadCompra] = useState('')

    function agregarcarrito(idproducto, nombre, valor, cantidadStock){
        var carrito = {
            nombre: nombre,
            valor: valor,
            cantidadStock: cantidadStock,
            cantidadCompra:cantidadCompra,
            idcarrito: idproducto
         }

         axios.post('/api/carrito/agregarcarrito',carrito)
         .then(res =>{
            Swal.fire('Felicidades', 'Se agrego al carrito')
         })
         .then(err => {console.log(err)})

} 
    return(
        <div className = 'container'>
            <div className='row'>
                <div className='col-sm-6 offset-3'>
                    <ul className='list-group'>
                        <li className='list-group-item'>{producto.nombre} </li>
                        <li className='list-group-item'>{producto.descripcion} </li>
                        <li className='list-group-item'>{producto.valor} </li>
                        <li className="list-group-item list-group-item-action flex-column align-items-start">
                            <div className="d-flex w-100 justify-content-between">
                                <small><b>Stock</b></small>
                                <p className='mb-1'  >{producto.cantidadStock}</p>
                            </div>   
                        </li>
                        <div className="input-group input-group-sm mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-sm">Cantidad a Comprar</span>
                            </div>
                            <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value = {cantidadCompra} onChange={(e) => {setcantidadCompra(e.target.value)}}></input>
                        </div>
                    </ul>
                    <button className = 'btn btn-success' onClick={()=>{agregarcarrito(producto.idproducto, producto.nombre, producto.valor, producto.cantidadStock)}}>Agregar al Carrito</button>
                    <hr className='mt-4'></hr>  
                </div>
            </div>
            
            <div>         
            </div>
        </div>
        
    )
}
                    
export default ProductoIndividual