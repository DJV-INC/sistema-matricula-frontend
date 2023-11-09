import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavbarBrand} from 'reactstrap'

import './HeaderNavbar.css'

export default function NavbarFuncionario() {
  return (
    <header>
      <nav className="header-navbar">
         <NavbarBrand href="/" className='emm-logo-link'>
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
            <NavLink to={"/admin"} className={"navlink"}>Alunos</NavLink>
            <NavLink to={"/admin/disciplina"} className={"navlink"}>Disciplinas</NavLink>
            <NavLink to={"/admin/professor"} className={"navlink"}>Professores</NavLink>
         </div>
      </nav>
    </header>
  )
}
