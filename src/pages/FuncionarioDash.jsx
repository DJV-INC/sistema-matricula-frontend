import React, { Fragment } from 'react'
import NavbarFuncionario from '../components/NavbarFuncionario'
import Dashboard from '../components/funcionario/Dashboard/Dashboard'

export default function FuncionarioDash() {
  return (
   <Fragment>
      <NavbarFuncionario />
      <Dashboard/>
   </Fragment>

  )
}
