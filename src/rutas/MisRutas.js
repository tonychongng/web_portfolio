import React from 'react'
import {Routes, Route,  BrowserRouter} from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { Portafolio } from '../components/Portafolio';
import { Curriculum } from '../components/Curriculum';
import { Technologies } from '../components/Technologies';
import { Contacto } from '../components/Contacto';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

export const MisRutas = () => {
  return (
    <BrowserRouter>


        {/*HEADER Y NAVEGACION*/}
        <Header/>

        {/*CONTENIDO CENTRAL*/}
        <section className='content'>

          <Routes>
              <Route path='/' element={<Inicio/>}/>
              <Route path='/web_portfolio' element={<Inicio/>}/>
              <Route path='/inicio' element={<Inicio/>}/>
              <Route path='/portafolio' element={<Portafolio/>}/>
              <Route path='/technologies' element={<Technologies/>}/>
              <Route path='/curriculum' element={<Curriculum/>}/>
              <Route path='/contacto' element={<Contacto/>}/>
              <Route path='/*' element={
                <h1 className='error'>Error 404</h1>
              }/>
          </Routes>

        </section>
        

        {/*FOOTER*/}
        <Footer/>
    
    </BrowserRouter>
  )
}
