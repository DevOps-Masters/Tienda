import axios from 'axios'
import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'

function CompraIndividual({carrito}){ 
  
    let total = parseFloat(carrito.cantidadCompra) * parseFloat(carrito.valor)

    const navegar =useNavigate()

    function cancelar(idcarrito){
        axios.post('/api/carrito/borrarcarrito', {idcarrito: idcarrito}).then(res => {
            console.log(res.data)
            Swal.fire('Cancelar', 'Compra Cancelada Exitosamente')
            navegar('/')
        }).catch(err => {
            console.log(err)
        })
    }

    return(
        <tbody>
            <tr>
                <td>Cargando Imagen...</td>
                <td>{carrito.nombre}</td>
                <td>{carrito.valor}</td>
                <td>{carrito.cantidadStock}</td>
                <td>{carrito.cantidadCompra}</td>
                <td>{total}</td>
                <td> 
                <button type="button" class="btn btn-danger btn-sm" onClick={()=>{cancelar(carrito.idcarrito)}}> Eliminar </button> </td>
            </tr>
        </tbody>
    )
}
export default CompraIndividual