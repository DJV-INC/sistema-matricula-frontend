import React from 'react'
import TableContainer from './TableContainer/TableContainer'

export default function ConsultaAluno() {
  return (
      <div className="container-main">
        <div className='page-title'>
          <h1 className='title_'>Alunos</h1>
          <p className='subtitle_'>Registros</p>
        </div>
        <TableContainer/>
      </div>
  )
}
