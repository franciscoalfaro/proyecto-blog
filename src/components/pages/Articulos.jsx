import React from 'react'
import { useState, useEffect } from 'react'
import { Global } from '../../helpers/Global';
import { Peticion } from '../../helpers/Peticion';

export const Articulos = () => {

  const [articulos, setArticulos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    conseguirArticulos();
  }, [])

  const conseguirArticulos = async () => {

    const { datos, cargando } = await Peticion(Global.url + "articulos", { method: 'PUT' })


    if (datos.status === "success") {
      setArticulos(datos.articulos)

    }
    setCargando(false);

  }


  return (
    <>
      {cargando ? " Cargando.." :
        (
          articulos.length >= 1 ?
            (
              articulos.map(articulo => {
                return (
                  <article key={articulo._id} className="articulo-item">
                    <div className='mask'>

                      <img src='{articulo.imagen}'></img>
                      <p>{articulo.imagen}</p>

                    </div>
                    <div className='datos'>
                      <h3 className="title">{articulo.titulo}</h3>
                      <p className="description">{articulo.contenido}</p>
                      <h3 className='autor'>{articulo.autor}</h3>
                      <button className="edit">Editar</button>
                      <button className="delete">Eliminar</button>
                    </div>
                  </article>
                );

              })
            ) :
            (<h1>No hay Articulos</h1>)
        )
      }
    </>
  )
}
