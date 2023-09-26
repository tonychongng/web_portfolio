import React, { useEffect } from 'react'
import { Portafolio } from './Portafolio'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';

export const Inicio = () => {
  

  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <div className='main-page'>

      <div className='welcome'>
        <h1 className='salute' data-aos="fade-right" data-aos-duration="1500">
          Hello!<br/>I'm <span>T</span>ony,<br/> a Web Developer
        </h1>

        
        
        <div className='about-me'>
          <h2>About Me</h2>
          <div className='typewriter'>
            <Typewriter
              onInit={(typewriter) => {
              typewriter.typeString("I love coding, that's all!")
              .start()
            }}/>
          </div>
          
        </div>
      </div>

      <div className='lasts-works'>
        <Portafolio/>
      </div>
    </div>
  )
}
