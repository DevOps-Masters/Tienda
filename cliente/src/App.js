import './App.css';
import Login  from './componentes/Login';
import ListaUsuarios from './componentes/ListaUsuarios';
import AgregarUsuario from './componentes/AgregarUsuario';
import EditarUsuario from './componentes/EditarUsuario';
import AgregarProducto from './componentes/AgregarProducto';
import ListaProductos from './componentes/ListaProductos';
import EditarProducto from './componentes/EditarProducto';
import ListaVentas from './componentes/ListaVentas';
import ListaProductosCompra from './componentes/ListaProductosCompra';
import ListaCarrito from './componentes/ListaCarrito';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand nx-auto" href="/login">MENU Tienda DevOps Master</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse mx-5" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto ">
                <li className="nav-item">
                  <a className="nav-link active"  href="login">Iniciar Sesión</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Gestión Usuarios</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/usuarios">Usuarios</a></li>
                    <li><a className="dropdown-item" href="/agregarusuario">Agregar Usuario</a></li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Administrador</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/productos">Lista Productos</a></li>
                    <li><a className="dropdown-item" aria-current="page" href="/agregarproducto">Agregar Producto</a></li>
                    <li><a className="dropdown-item" aria-current="page" href="/ventas">Lista de Ventas</a></li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Cliente</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" aria-current="page" href="/productoscompra">Comprar Productos</a></li>
                    <li><a className="dropdown-item" aria-current="page" href="/carrito">Carrito</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div>
              <img alt="logo" src='./files/avatar.jpg'></img>
            </div>
          </div>
        </nav>
        
        <BrowserRouter>
          <Routes>
            <Route path= '/login' element = {<Login/>} exact></Route>
            <Route path= '/agregarusuario' element = {<AgregarUsuario/>} exact></Route>
            <Route path= '/usuarios' element = {<ListaUsuarios/>} exact></Route>
            <Route path= '/editarusuario/:idusuario' element = {<EditarUsuario/>} exact></Route>
            <Route path= '/agregarproducto' element = {<AgregarProducto/>} exact></Route>
            <Route path= '/productos' element = {<ListaProductos/>} exact></Route>
            <Route path= '/editarproducto/:idproducto' element = {<EditarProducto/>} exact></Route>
            <Route path= '/ventas' element = {<ListaVentas/>} exact></Route>
            <Route path= '/productoscompra' element = {<ListaProductosCompra/>} exact></Route>
            <Route path= '/carrito' element = {<ListaCarrito/>} exact></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
}
export default App;