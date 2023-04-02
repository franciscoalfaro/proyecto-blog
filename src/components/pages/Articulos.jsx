import React from 'react'
import { useState, useEffect } from 'react'
import { Global } from '../../helpers/Global';
import { Peticion } from '../../helpers/Peticion';
import { Listar } from './Listar';



export const Articulos = () => {

  const [articulos, setArticulos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    conseguirArticulos();
  }, [])

  const conseguirArticulos = async () => {

    const { datos, cargando } = await Peticion(Global.url + "articulos", "GET")


    if (datos.status === "success") {
      setArticulos(datos.articulos)

    }
    setCargando(false);

  }

  return (

    <>
      {cargando ? " Cargando.." :
        (
          articulos.length >= 1 ? <Listar articulos={articulos} setArticulos={setArticulos}></Listar>:<h1>No hay Articulos</h1>
        )
      }
    </>
  )
}
