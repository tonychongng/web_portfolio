import React from 'react'
import {NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='header'>

        <div className='logo'>
            <span>T</span>
            <h3>Tony Chong NG</h3>
        </div>
        

        <nav>
            <ul>
                <li>
                    <NavLink to="/inicio" className={({isActive}) => isActive ? "activado" : ""}>Inicio</NavLink>
                </li>
            </ul>

            <ul>
                <li>
                    <NavLink to="/portafolio" className={({isActive}) => isActive ? "activado" : ""}>Portafolio</NavLink>
                </li>
            </ul>

            <ul>
                <li>
                    <NavLink to="/servicios" className={({isActive}) => isActive ? "activado" : ""}>Servicios</NavLink>
                </li>
            </ul>

            <ul>
                <li>
                    <NavLink to="/curriculum" className={({isActive}) => isActive ? "activado" : ""}>Curriculum</NavLink>
                </li>
                
            </ul>
            <ul>
                <li>
                    <NavLink to="/contacto" className={({isActive}) => isActive ? "activado" : ""}>Contacto</NavLink>
                </li>
            </ul>
        </nav>

    </header>
  )
}
