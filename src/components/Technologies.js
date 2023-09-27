import React from 'react'
import { frontEnd } from './datos/frontEnd'
import { backEnd } from './datos/backEnd'
import { extras } from './datos/extras'


export const Technologies = () => {
  return (
    <div className='technologies'>
      <h1 className='portfolio-title'>My <span>Technologies</span></h1>

      <div>
        <h2>Front-End</h2>

        <div className='tech-object'>
          {
            frontEnd.map(tech => {
              return (
                <div key={tech.id} className='technology-item'>
                  <img src={tech.url} alt={tech.name} width="45px"/>
                  <div className='tech-description'>
                    <h3>{tech.name}</h3>
                    <p>{tech.function}</p>
                  </div>
                  
                </div>
              )
            })
          }
        </div>
        
      </div>

      <div>
        <h2>Back-End</h2>
        
        <div className='tech-object'>
          {
            backEnd.map(tech => {
              return (
                <div key={tech.id} className='technology-item'>
                  <img src={tech.url} alt={tech.name} width="45px"/>
                  <div className='tech-description'>
                    <h3>{tech.name}</h3>
                    <p>{tech.function}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        
        
      </div>

      <div>
        <h2>Extras</h2>

        <div className='tech-object' >
          {
            extras.map(tech => {
              return (
                <div key={tech.id} className='technology-item'>
                  <img src={tech.url} alt={tech.name} width="45px"/>
                  <div className='tech-description'>
                    <h3>{tech.name}</h3>
                    <p>{tech.function}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        
      </div>
    </div>
  )
}
