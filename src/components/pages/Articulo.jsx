import React from 'react'
import { useState, useEffect } from 'react'
import { Global } from '../../helpers/Global';
import { Peticion } from '../../helpers/Peticion';
import { Listar } from './Listar';
import { useParams } from 'react-router-dom';



export const Articulo = () => {

  const [articulo, setArticulo] = useState([]);
  const [cargando, setCargando] = useState(true);
  const params = useParams()

  useEffect(() => {
    conseguirArticulo();
  }, [])

  const conseguirArticulo = async () => {

    const { datos, cargando } = await Peticion(Global.url + "articulo/" + params.id, "GET")

    if (datos.status === "success") {
      setArticulo(datos.articulo)

    }
    setCargando(false);
    console.log(articulo)

  }

  return (

    <div className='jumbo'>
      {cargando ? " Cargando.." :
        (
          <>
            <div className='mask'>
              {articulo.imagen != "default.png" && <img src={Global.url + "imagen/" + articulo.imagen}></img>}
              {articulo.imagen == "default.png" && <img src="https://w7.pngwing.com/pngs/40/782/png-transparent-spiderman-illustration-spider-man-iron-man-may-parker-marvel-cinematic-universe-marvel-comics-spider-man-heroes-superhero-fictional-character.png"></img>}

            </div>
            <h1>{articulo.titulo}</h1>
            <span>{articulo.fecha}</span>
            <p>{articulo.contenido}</p>
          </>
        )
      }
    </div>
  )
}
