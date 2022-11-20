import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import "../styles/styleLogin.css"
//import { BarraNav } from "./barraNav";

function Login (){
    return(
        <div className="container-fluid">
            <div className="centrar">
                <br></br>
                <h1> Iniciar Sesion </h1>
                <br></br>   
            </div>
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4" id="colPers">
                    <div className="row">
                        <div className="col"><label>Email</label></div>
                        <div className="col"><input type="email" id="emailCred" placeholder="Ingrese su Email"/></div> 
                    </div>
                        <div className="row">&nbsp;</div>
                        <div className="row">
                        <div className="col"><label>Contraseña</label></div>
                        <div className="col"><input type="password" id="passwordCred" placeholder="Ingrese su Password"/></div>
                    </div>
                <div className="row"> &nbsp;</div>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-"><button type="button" className="btn btn-success">Acceder</button></div>
                        <div className="col"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login