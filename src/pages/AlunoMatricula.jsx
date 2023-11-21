import React, { Fragment } from 'react'
import NavbarAluno from '../components/NavbarAluno'
import ConsultaMatricula from '../components/aluno/Matricula/ConsultaMatricula'

export default function AlunoMatricula() {
   return (
      <Fragment>
         <NavbarAluno/>
         <ConsultaMatricula/>
      </Fragment>
   )
}
