import axios from 'axios'
import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'

function UsuarioIndividual({usuario}){

    const navegar =useNavigate()
    
    //funcion para borrar usuario
    function borrarusuario(idusuario){
        axios.post('/api/usuario/borrarusuario', {idusuario: idusuario}).then(res => {
            console.log(res.data)
            //alert(res.data)
            Swal.fire('Felicidades', 'El usuario fue borrado')
            navegar('0')
        }).catch(err => {
            console.log(err)
        })
}
    return(
        <div className = 'container'>
            <div className='row'>
                <div className='col-sm-6 offset-3'>
                    <ul className='list-group  mb-2'>
                        <li className='list-group-item'>{usuario.nombre} </li>
                        <li className='list-group-item'>{usuario.email} </li>
                        <li className='list-group-item'>{usuario.telefono} </li>
                    </ul>
                    <Link to={`/editarusuario/${usuario.idusuario}`}><li className = 'btn btn-success'>Editar</li></Link>
                     &nbsp; &nbsp;
                    <button className='btn btn-danger' onClick={()=>{borrarusuario(usuario.idusuario)}}>Borrar</button>
                    <hr className='mt-4'></hr>
                </div>
            </div>
            
        </div>
    )
}
export default UsuarioIndividual