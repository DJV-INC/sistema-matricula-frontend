import React from 'react'

import './ConsultaAluno.css'
import TableContainer from './TableContainer/TableContainer'

export default function ConsultaAluno() {
  return (
      <div className="container-main">
        <div className='page-title'>
          <h4>Alunos</h4>
          <span>Registros</span>
        </div>
        <TableContainer/>
      </div>
  )
}
