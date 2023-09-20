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
              {console.log("C:/wamp64/www/master-react/08-proyecto2/public/images/"+trabajo.id+".PNG")}


                <img src={"C:/wamp64/www/master-react/08-proyecto2/public/images/"+trabajo.id+".PNG"} alt='hola'/>

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
