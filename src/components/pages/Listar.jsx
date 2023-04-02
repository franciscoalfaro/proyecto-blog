import React from 'react'
import { Link } from 'react-router-dom';
import { Global } from '../../helpers/Global';
import { Peticion } from '../../helpers/Peticion';


export const Listar = ({articulos,setArticulos}) => {

  const eliminar = async(id)=> {
    let {datos} = await Peticion(Global.url+"articulo/"+id, "DELETE");

    if(datos.status === "success"){
      let articulosActualizados = articulos.filter(articulo => articulo._id !==id)
      setArticulos(articulosActualizados)
    }

  }
  return (
    articulos.map(articulo => {
        return (
          <article key={articulo._id} className="articulo-item">
            <div className='mask'>
              {articulo.imagen !="default.png" && <img src={Global.url+"imagen/"+articulo.imagen}></img>}
              {articulo.imagen == "default.png" && <img src="https://w7.pngwing.com/pngs/40/782/png-transparent-spiderman-illustration-spider-man-iron-man-may-parker-marvel-cinematic-universe-marvel-comics-spider-man-heroes-superhero-fictional-character.png"></img>}

             </div>
            <div className='datos'>
              <h3 className="title"><Link to={"/articulo/"+articulo._id}>{articulo.titulo}</Link></h3>
              <p className="description">{articulo.contenido}</p>
              <h3 className='autor'>{articulo.autor}</h3>

              <Link to={"/editar/"+articulo._id} className="edit">Editar</Link>
              <button className="delete" onClick={()=>{eliminar(articulo._id)}}>Eliminar</button>
            </div>
          </article>
        );

      })
    
  )
}