import React, { Fragment } from 'react'
import NavbarAluno from '../components/NavbarAluno'
import FormMatricula from '../components/aluno/Matricula/FormMatricula'
import ConsultaBoletim from '../components/aluno/Boletim/ConsultaBoletim'

export default function AlunoBoletim() {
   return (
      <Fragment>
         <NavbarAluno/>
         <ConsultaBoletim/>
      </Fragment>
   )
}
