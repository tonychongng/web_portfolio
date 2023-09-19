import React from 'react'
import { trabajos } from './datos/trabajos';
import {Link} from 'react-router-dom';

export const Portafolio = () => {
  return (
    <div>

      {
        trabajos.map( trabajo => {
          return (
            <article key={trabajo.id}>
              <span>{trabajo.categorias}</span>
              <h2><Link to={trabajo.url} target='__blank'>{trabajo.nombre}</Link></h2>
              <h3>{trabajo.tecnologias}</h3>
            </article>
          )
          
        })
      }



    </div>

    
  )
}
