import React from 'react'

import TableContainer from './TableContainer/TableContainer'

export default function ConsultaDisciplina() {
  return (
      <div className="container-main">
        <div className='page-title'>
        <h1 className='title_'>Disciplinas</h1>
        <p className='subtitle_'>Registros</p>
        </div>
        <TableContainer/>
      </div>
  )
}
