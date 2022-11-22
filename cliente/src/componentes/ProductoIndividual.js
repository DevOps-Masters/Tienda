import axios from 'axios'
import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'

function ProductoIndividual({producto}){

    const navegar =useNavigate()
    //funcion para borrar producto
    function borrarproducto(idproducto){
        axios.post('/api/producto/borrarproducto', {idproducto: idproducto}).then(res => {
            console.log(res.data)
            Swal.fire('Felicidades', 'El producto fue borrado')
            navegar('0')
        }).catch(err => {
            console.log(err)
        })
}
 //<li className='list-group-item'>{producto.idproducto} </li>

    return(
        <div className = 'container'>
            <div className='row'>
                <div className='col-sm-6 offset-3'>
                    <ul className='list-group'>
                        <li className='list-group-item'>{producto.nombre} </li>
                        <li clssName='list-group-item'><img alt="Imagen_Producto" src={producto.img}></img></li>
                        <li className='list-group-item'>{producto.descripcion} </li>
                        <li className='list-group-item'>{producto.valor} </li>
                        <li className='list-group-item'>{producto.cantidadStock} </li>   
                    </ul>
                    <br></br>
                    <Link to={`/editarproducto/${producto.idproducto}`}><li className = 'btn btn-success'>Modificar</li></Link>
                     &nbsp;
                    <button className='btn btn-danger' onClick={()=>{borrarproducto(producto.idproducto)}}>Eliminar</button>
                    <hr className='mt-4'></hr>
                </div>
            </div>
            
        </div>
    )
} 
export default ProductoIndividual