import React from 'react'
import {Routes, Route, NavLink, BrowserRouter} from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { Portafolio } from '../components/Portafolio';
import { Servicios } from '../components/Servicios';
import { Curriculum } from '../components/Curriculum';
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
              <Route path='/inicio' element={<Inicio/>}/>
              <Route path='/portafolio' element={<Portafolio/>}/>
              <Route path='/servicios' element={<Servicios/>}/>
              <Route path='/curriculum' element={<Curriculum/>}/>
              <Route path='/contacto' element={<Contacto/>}/>
          </Routes>
          
        </section>
        

        {/*FOOTER*/}
        <Footer/>
    
    </BrowserRouter>
  )
}
