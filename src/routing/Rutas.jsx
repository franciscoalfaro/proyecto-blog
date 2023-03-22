import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Footer } from "../components/layaout/Footer";
import { Header } from "../components/layaout/Header";
import { Nav } from "../components/layaout/Nav";
import { Sidebar } from "../components/layaout/Sidebar";
import { Articulos } from "../components/pages/Articulos";
import { Crear } from "../components/pages/Crear";
import { Inicio } from "../components/pages/Inicio";


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
                <Route path="/crear-articulo" element={<Crear></Crear>}></Route>
            </Routes>

        </section>
        <Sidebar></Sidebar>
        <Footer></Footer>

        </BrowserRouter>
    )
}