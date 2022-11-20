import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductoIndividualCompra from './ProductoIndividualCompra'

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
                <ProductoIndividualCompra producto = {producto}/>
            </div>
        )
    })

    return(
        <div>
            <h2 class="my-4"> Lista de Productos para Comprar</h2>
            {listaproductos}
        </div>
    )
}
export default ListaProductos