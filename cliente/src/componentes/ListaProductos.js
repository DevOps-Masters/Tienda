import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductoIndividual from './ProductoIndividual'

function ListaProductos(){
 
    const[dataproductos, setdataproducto] = useState([])

    useEffect(() => {
        axios.get('api/producto/obtenerproductos').then (res =>{
            console.log(res.data)
            setdataproducto(res.data)
        }).catch (err => {
            console.log(err)
        })
    }, [])

    //Mapear lista de productos en objeto producto
    const listaproductos = dataproductos.map(producto =>{
        return(
            <div>
                <ProductoIndividual producto = {producto}/>
            </div>
        )
    })
 
    return(
        <div>
            <br></br>
            <h2> Lista de Productos</h2>
            <br></br>
            {listaproductos}
        </div>
    )
}
export default ListaProductos