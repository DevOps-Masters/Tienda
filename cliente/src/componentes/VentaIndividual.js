//import axios from 'axios'
import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
//import Swal from 'sweetalert2'

function VentaIndividual({venta}){

    return(
        <tbody>
            <tr>
                <td>{venta.fecha}</td>
                <td>{venta.idventa}</td>
                <td>{venta.valor}</td>
            </tr>
        </tbody>
    )
} 
export default VentaIndividual