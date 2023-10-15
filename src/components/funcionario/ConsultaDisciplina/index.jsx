import React, { Fragment } from 'react'

import './style.css'
import TableContainer from './TableConainer'

export default function ConsultaAluno() {
  return (
      <div className="container-main">
        <div className='page-title'>
          <h4>Diciplinas</h4>
          <span>Registros</span>
        </div>
        <TableContainer/>
      </div>
  )
}
