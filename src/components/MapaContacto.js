import React from 'react'

export const MapaContacto = () => {
  return (
    <div className='mapas'>
        <iframe
        title='madrid'
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194348.2336895128!2d-3.8443453603429734!3d40.43783728324203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid!5e0!3m2!1sen!2ses!4v1682847409176!5m2!1sen!2ses"
      className="mapa"
      width="100%"
      height="100%"
      style={{ border: '0' }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
    </div>
  )
}
