import React from 'react'
import { trabajos } from './datos/trabajos';
import {Link} from 'react-router-dom';

export const Portafolio = () => {

  return (
    <div>
      <section className='works'>
        {
          trabajos.map( trabajo => {
            return (
              <article key={trabajo.id} className='work-item'>
                <div className='mask'>
                  <img src={trabajo.id} alt='hola' />
                </div>
                
                <span>{trabajo.nombre}</span>

                <div className='demo-code'>
                  <a href={trabajo.demo} target='__blank'><p>Demo→</p></a>
                  <a href={trabajo.code} target='__blank'><p>Code→</p></a>
                </div>

                <h3>{trabajo.tecnologias}</h3>
              </article>
            );
          })
        }
      </section>


    </div>

    
  )
}
