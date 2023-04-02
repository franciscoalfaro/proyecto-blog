import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Sidebar = () => {
  const [buscar, setBuscar] = useState("")
  const navegar = useNavigate();

  const buscador = (e) =>{
    e.preventDefault()
    let miBusqueda = e.target.search_field.value
    navegar("/buscar/"+miBusqueda,{replace:true})

  }

  return (

    <aside className="lateral">
      <div className="search">
        <h3 className="title">Buscar Articulo</h3>
        <form onSubmit={buscador}>
          <input type="text" name='search_field'></input>
          <input type="submit" id="search" value="Buscar"></input>
        </form>
      </div>
    </aside>


  )
}
