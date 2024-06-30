import React from 'react'
import { useState, useEffect } from 'react'
import { useForms } from '../../hooks/useForms'
import { Peticion } from '../../helpers/Peticion'
import { Global } from '../../helpers/Global'
import { useParams } from 'react-router-dom';

export const Editar = () => {
  const { formulario, enviado, cambiado } = useForms({})
  const [resultado, setResultado] = useState();
  const [articulo, setArticulo] = useState([]);
  const params = useParams()


  useEffect(() => {
    conseguirArticulo();
  }, [])


  const conseguirArticulo = async () => {

    const { datos } = await Peticion(Global.url + "articulo/" + params.id, "GET")

    if (datos.status === "success") {
      setArticulo(datos.articulo)

    }

  }


  const editarArticulo = async (e) => {
    e.preventDefault();

    //recorger datos del formulario
    let nuevoArticulo = formulario


    //guardar datos en el backen
    const { datos } = await Peticion(Global.url + "articulo/"+params.id, "PUT", nuevoArticulo);

    if (datos.status === "success") {
      setResultado("guardado")

    } else {
      setResultado("error")

    }

    //subir imagen
    const fileInput = document.querySelector('#file')

    if (datos.status === "success" && fileInput.files[0]) {
      setResultado("guardado")

      const formData = new FormData();
      formData.append('file0', fileInput.files[0])

      const { subida } = await Peticion(Global.url + "subir-imagen/" + datos.articulo._id, "POST", formData, true);
  

      if (subida.datos.status === "success") {
        setResultado("guardado")

      } else {
        setResultado("error")

      }
    }

  };

  return (
    <div className='jumbo'>
      <h1>Editar Articulo</h1>
      <p>Formulario para editar: {articulo.titulo}</p>

      <strong>{resultado == "guardado" ? "articulo guardado de forma exitosa" : ""}</strong>
      <strong>{resultado == "error" ? "Datos ingresados de forma incorrecta." : ""}</strong>

      {/*montar formulario*/}
      <form className='formulario' onSubmit={editarArticulo}>

        <div className='form-group'>
          <label htmlFor='titulo'>Titulo</label>
          <input type="text" name="titulo" onChange={cambiado} defaultValue={articulo.titulo}></input>

        </div>

        <div className='form-group'>
          <label htmlFor='descripcion'>descripcion</label>
          <input type="text" name="descripcion" onChange={cambiado} defaultValue={articulo.descripcion}></input>
        </div>

        <div className='form-group'>
          <label htmlFor='contenido'>contenido</label>
          <textarea type="text" name="contenido" onChange={cambiado} defaultValue={articulo.contenido}></textarea>
        </div>

        <div className='form-group'>
          <label htmlFor='autor'>autor</label>
          <input type="text" name="autor" onChange={cambiado} defaultValue={articulo.autor}></input>
        </div>

        <div className='form-group'>
          <label htmlFor='file0'>imagen</label>
          <div className='mask'>
            {articulo.imagen != "default.png" && <img src={Global.url + "imagen/" + articulo.imagen}></img>}
            {articulo.imagen == "default.png" && <img src="https://w7.pngwing.com/pngs/40/782/png-transparent-spiderman-illustration-spider-man-iron-man-may-parker-marvel-cinematic-universe-marvel-comics-spider-man-heroes-superhero-fictional-character.png"></img>}

          </div>
          <input type="file" name="file0" id='file'></input>
        </div>

        <input type="submit" defaultValue="Guardar" className='button' ></input>

      </form>

    </div>
  )
}
