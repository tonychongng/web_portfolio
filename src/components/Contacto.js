import React from 'react'
import { MapaContacto } from './MapaContacto';
import github from '../images/github.png';
import instagram from '../images/instagram.png';
import linkedin from '../images/linkedin.png';


export const Contacto = () => {
  return (

    <div className='contacto-layout'>

      <h2>Based in <span>M</span>adrid</h2>

      <MapaContacto/>

      <div className='contact'>
        <h3>Contact Me</h3>
        <form  action='mailto:tonychongng123@gmail.com'>
          <div className='name-last'>
            <input type='text' name='nombre' placeholder='Name'/>
            <input type='text' name='apellido' placeholder='Last Name'/>
          </div>
          
          <div className='others'>
            <input type='text' id='others-input' name='subject' placeholder='Subject'/>
            <textarea name='mensaje' placeholder='Message'></textarea>
          </div>

          <input type='submit' value="Send Message!"/>
        </form>
      </div>

      <div className='redes-sociales'>

      <a href='https://github.com/tonychongng'><img src={github} alt='github'></img></a>
      <a href='https://www.linkedin.com/in/chong-ng-tony'><img src={linkedin} alt='linkedin'></img></a>
      <a href='https://www.instagram.com/to.ny_ng/'><img src={instagram} alt='instagram'></img></a>
      </div>
      
    </div>
  )
}
