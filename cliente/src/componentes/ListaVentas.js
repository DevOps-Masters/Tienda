import React, { useEffect, useState } from 'react'
import axios from 'axios'
import VentaIndividual from './VentaIndividual'

function ListaVentas(){

    const[dataventas, setdataventa] = useState([])

    useEffect(() => {
        axios.get('api/venta/obtenerventas').then (res =>{
            console.log(res.data)
            setdataventa(res.data)
        }).catch (err => {
            console.log(err)
        })
    }, [])

    //Mapear lista de usuarios en objeto usuario
    const listaventas = dataventas.map(venta =>{
        return(
                <VentaIndividual venta = {venta}/>
        )
    })

    return(
        <div className = 'container'>
            <h2 className='mt-4'> Lista de Ventas </h2>
            <br></br>
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Fecha</th>
                            <th scope="col">Id_Venta</th>
                            <th scope="col">Valor</th>
                        </tr>
                    </thead>
                        {listaventas}
                    </table>   
            </div>
        </div>
    )
    
}
export default ListaVentas