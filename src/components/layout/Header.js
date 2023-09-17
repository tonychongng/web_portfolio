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
                    <NavLink to="/inicio" className={({isActive}) => isActive ? "activado" : ""}>Home</NavLink>
                </li>
            </ul>

            <ul>
                <li>
                    <NavLink to="/portafolio" className={({isActive}) => isActive ? "activado" : ""}>Portfolio</NavLink>
                </li>
            </ul>

            <ul>
                <li>
                    <NavLink to="/technologies" className={({isActive}) => isActive ? "activado" : ""}>Technologies</NavLink>
                </li>
            </ul>

            <ul>
                <li>
                    <NavLink to="/contacto" className={({isActive}) => isActive ? "activado" : ""}>Contact</NavLink>
                </li>
            </ul>
        </nav>

    </header>
  )
}
