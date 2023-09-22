import React from 'react'
import { Portafolio } from './Portafolio'

export const Inicio = () => {
  return (
    <div className='main-page'>

      <div className='welcome'>
        <h1 className='salute'>Hello!<br/>I'm <span>T</span>ony,<br/> a Web Developer</h1>
        
        <div className='about-me'>
          <h2>About Me</h2>
          <p>I love coding, that's all</p>
        </div>
      </div>

      <div className='lasts-works'>
        <Portafolio/>
      </div>
    </div>
  )
}
