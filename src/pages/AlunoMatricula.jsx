import React, { Fragment } from 'react'
import HeaderNavbar from '../components/HeaderNavbar'
import ConsultaMatricula from '../components/aluno/ConsultaMatricula/ConsultaMatricula'

export default function AlunoMatricula() {
   return (
      <Fragment>
         <HeaderNavbar/>
         <ConsultaMatricula/>
      </Fragment>
   )
}
