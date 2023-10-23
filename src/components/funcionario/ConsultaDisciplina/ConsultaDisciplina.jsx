import React from 'react'

import './ConsultaDisciplina.css'
import TableContainer from './TableContainer/TableContainer'

export default function ConsultaDisciplina() {
  return (
      <div className="container-main">
        <div className='page-title'>
          <h4>Disciplinas</h4>
          <span>Registros</span>
        </div>
        <TableContainer/>
      </div>
  )
}
