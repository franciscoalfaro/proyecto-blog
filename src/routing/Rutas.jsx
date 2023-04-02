import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Footer } from "../components/layaout/Footer";
import { Header } from "../components/layaout/Header";
import { Nav } from "../components/layaout/Nav";
import { Sidebar } from "../components/layaout/Sidebar";
import { Articulos } from "../components/pages/Articulos";
import { Crear } from "../components/pages/Crear";
import { Inicio } from "../components/pages/Inicio";
import { Busqueda } from "../components/pages/Busqueda";
import { Articulo } from "../components/pages/Articulo";
import { Editar } from "../components/pages/Editar";


export const Rutas = () =>{
    return(
        <BrowserRouter>
        {/* Layout*/}
        <Header></Header>
        <Nav></Nav>


        {/* Contenido central y rutas*/}

        <section id="content" className="content">
            <Routes>
                <Route path="/" element={<Inicio></Inicio>}></Route>
                <Route path="/inicio" element={<Inicio></Inicio>}></Route>
                <Route path="/articulos" element={<Articulos></Articulos>}></Route>
                <Route path="/crear-articulos" element={<Crear></Crear>}></Route>
                <Route path="/buscar/:busqueda" element={<Busqueda></Busqueda>}></Route>
                <Route path="/articulo/:id" element={<Articulo></Articulo>}></Route>
                <Route path="/editar/:id" element={<Editar></Editar>}></Route>

                <Route path="*" element={<div className="jumbo"><h1>Error 404 Pagina no encontrada</h1></div>}></Route>
            </Routes>

        </section>
        <Sidebar></Sidebar>
        <Footer></Footer>

        </BrowserRouter>
    )
}