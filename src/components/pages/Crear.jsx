import React from 'react'
import { useState } from 'react'
import { useForms } from '../../hooks/useForms'
import { Peticion } from '../../helpers/Peticion'
import { Global } from '../../helpers/Global'

export const Crear = () => {
  const {formulario, enviado, cambiado} = useForms({})
  const [resultado, setResultado] = useState();

  const guardarArticulo = async(e) =>{
    e.preventDefault();

    //recorger datos del formulario
    let nuevoArticulo = formulario
    console.log(nuevoArticulo)
    
    //guardar datos en el backen
    const {datos} = await Peticion(Global.url + "crear", "POST", nuevoArticulo);

    if(datos.status === "success"){
      setResultado("guardado")
      
    }else{
      setResultado("error")

    }
    
    //subir imagen
    const fileInput = document.querySelector('#file')

    if(datos.status === "success" && fileInput.files[0]){
      setResultado("guardado")

      const formData= new FormData();
      formData.append('file0', fileInput.files[0])

      const {subida} = await Peticion(Global.url + "subir-imagen/"+datos.articulo._id, "POST", formData, true);
      console.log(subida)

      if(subida.datos.status === "success"){
        setResultado("guardado")
        
      }else{
        setResultado("error")

      }
    }

  };

  return (
    <div className='jumbo'>
      <h1>Crear Articulo</h1>
      <p>Formulario para crear articulos</p>

      <strong>{resultado == "guardado" ? "articulo guardado de forma exitosa": ""}</strong>    
      <strong>{resultado == "error" ? "Datos ingresados de forma incorrecta.": ""}</strong>    

      {/*montar formulario*/}
      <form className='formulario' onSubmit={guardarArticulo}>

        <div className='form-group'>
          <label htmlFor='titulo'>Titulo</label>
          <input type="text" name="titulo" onChange={cambiado}></input>
        </div>

        <div className='form-group'>
          <label htmlFor='descripcion'>Descripcion</label>
          <input type="text" name="descripcion" onChange={cambiado}></input>
        </div>
        
        <div className='form-group'>
          <label htmlFor='contenido'>Contenido</label>
          <textarea type="text" name="contenido" onChange={cambiado}></textarea>
        </div>

        <div className='form-group'>
          <label htmlFor='autor'>Autor</label>
          <input type="text" name="autor" onChange={cambiado}></input>
        </div>

        <div className='form-group'>
          <label htmlFor='file0'>Imagen</label>
          <input type="file" name="file0" id='file'></input>
        </div>

        <input type="submit" value="Guardar" className='button' ></input>

      </form>

    </div>
  )
}
