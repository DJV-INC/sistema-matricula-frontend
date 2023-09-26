import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavbarBrand, Navbar } from 'reactstrap'

import './HeaderNavbar.css'

export default function HeaderNavbar() {
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
            <NavLink to={"/"} className={"navlink"}>Alunos</NavLink>
            <NavLink to={"/disciplinas"} className={"navlink"}>Disciplinas</NavLink>
            <NavLink to={"/Professores"} className={"navlink"}>Professores</NavLink>
         </div>
      </nav>
    </header>
  )
}
