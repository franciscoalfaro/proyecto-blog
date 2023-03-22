import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div className='jumbo'>
      <h1>Blog con React</h1>
      <p>Blog desarrollado con MERN Stack(Mongo, Express, React, NodeJS</p>
      <Link to="/articulos" className='button'>Ver publicaciones</Link>
      
    </div>
  )
}
