import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavbarBrand} from 'reactstrap'

import './HeaderNavbar.css'

export default function NavbarAluno() {
  return (
    <header>
      <nav className="header-navbar">
         <NavbarBrand href="/login" className='emm-logo-link'>
            <img
            alt="logo"
            src="/emm-logo.svg"
            style={{
               height: 30,
               width: 30
            }}
            />
         </NavbarBrand>

         <div className="navlinks-container">
            <NavLink to={"/aluno/1/matricula"} className={"navlink"}>Matrícula</NavLink>
            <NavLink to={"/aluno/1/boletim"} className={"navlink"}>Boletim</NavLink>
         </div>
      </nav>
    </header>
  )
}
