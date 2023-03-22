import React from 'react'

export const Sidebar = () => {
  return (

    <aside className="lateral">
      <div className="search">
        <h3 className="title">Buscar Articulo</h3>
        <form>
          <input type="text" id='search_field'></input>
            <button className="button">Buscar</button>
        </form>
      </div>

      {/*<div className="add">
        <h3 className="title">Agregar Pelicula</h3>
        <form>
          <input type="text" id='title' placeholder="Titulo"></input>
          <textarea id="description" placeholder="Descripcion"></textarea>
          <input type="submit" id="save" value="Guardar"></input>

        </form>
      </div>
      */}
    </aside>


  )
}
