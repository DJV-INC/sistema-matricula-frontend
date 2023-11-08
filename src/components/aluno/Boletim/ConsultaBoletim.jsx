import React from 'react'
import TableContainer from './TableContainer/TableContainer'

export default function ConsultaBoletim() {
   return (
      <div className="container-main">
         <div className='page-title'>
            <h1 className='title_'>Boletim</h1>
            <p className='subtitle_'>Selecione o semestre para acessar o boletim respectivo</p>
         </div>

         <TableContainer/>
      </div>
   )
}
