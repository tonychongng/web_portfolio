import React from 'react'
import { MapaContacto } from './MapaContacto';

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
      
    </div>
  )
}
