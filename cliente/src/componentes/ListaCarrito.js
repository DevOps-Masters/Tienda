import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router'
import axios from 'axios'
import Swal from 'sweetalert2'
import uniquid from 'uniqid'
import CompraIndividual from './CompraIndividual'

let ventas=[]

function ListaCarrito(){    

    const[datacarritos, setdatacarrito] = useState([])

    const navegar =useNavigate()

    useEffect(() => {
        axios.get('api/carrito/obtenercarritos').then (res =>{
            console.log(res.data)
            setdatacarrito(res.data)
            ventas=res.data
        }).catch (err => {
            console.log(err)
        })
    }, [])

    
    //Mapear lista de productos en objeto producto
    const listacarritos = datacarritos.map(carrito =>{
        return(
            <CompraIndividual carrito = {carrito}/>
        )
    })

    function agregarVenta(total_venta){
        var venta={
            idventa: uniquid(),
            valor: total_venta
        }

        axios.post('/api/venta/agregarventa',venta)
         .then(res =>{
            //alert(res.data)
            Swal.fire('Felicidades', 'Venta realizada')
         })
         .then(err => {console.log(err)})
    }

    function cancelar(idcarrito){
        axios.post('/api/carrito/borrarcarrito', {idcarrito: idcarrito}).then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    function finalizarcompra(){
        let total_venta=0
        let costo=0
        let id
        let fecha= new Date()

        for (let i=0; i<ventas.length; i++){
            console.log(ventas[i])
            costo= parseFloat(ventas[i].valor) * parseFloat(ventas[i].cantidadCompra)
            total_venta+=costo
            console.log(costo)
        }

        console.log(total_venta)
        agregarVenta(total_venta)

        for(let i=0; i<ventas.length; i++){
            id=ventas[i].idcarrito
            setTimeout(function(){
                cancelar(id)
            },1000)
        }
        navegar('/')
    }
 
    return(
        <div className = 'container'>
            <h2 className='mt-4'> Carrito de Productos </h2>
            <br></br>
            <div >
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Imagen</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Valor</th>
                            <th scope="col">Cantidad Stock</th>
                            <th scope="col">Cantidad Comprada</th>
                            <th scope="col">Total</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    {listacarritos} 
                </table>   
            </div>
            <button className='btn btn-primary' onClick={()=>{finalizarcompra()}}>Finalizar Compra</button>
            <br></br>
            <br></br>
            <br></br>          
        </div>
    )

}
export default ListaCarrito
