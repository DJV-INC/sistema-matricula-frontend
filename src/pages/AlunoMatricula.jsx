import React, { Fragment } from 'react'
import HeaderNavbar from '../components/HeaderNavbar'
import ConsultaMatricula from '../components/aluno/RegistroMatricula/ConsultaMatricula'

export default function AlunoMatricula() {
   return (
      <Fragment>
         <HeaderNavbar/>
         <ConsultaMatricula/>
      </Fragment>
   )
}
