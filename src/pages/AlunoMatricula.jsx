import React, { Fragment } from 'react'
import NavbarAluno from '../components/NavbarAluno'
import FormMatricula from '../components/aluno/Matricula/FormMatricula'

export default function AlunoMatricula() {
   return (
      <Fragment>
         <NavbarAluno/>
         <FormMatricula/>
      </Fragment>
   )
}
