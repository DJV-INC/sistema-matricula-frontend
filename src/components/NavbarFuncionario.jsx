import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavbarBrand} from 'reactstrap'

import './HeaderNavbar.css'

export default function NavbarFuncionario() {
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
            <NavLink to={"/"} className={"navlink"}>Alunos</NavLink>
            <NavLink to={"/disciplina"} className={"navlink"}>Disciplinas</NavLink>
            <NavLink to={"/professor"} className={"navlink"}>Professores</NavLink>
         </div>
      </nav>
    </header>
  )
}
