import React, { Fragment } from 'react'

import { Table } from 'reactstrap'

import "./TableTurmaProfessor.css"

export default function TableTurmaProfessor({data}) {
  return (
         <Fragment>
            <table className='table_'>
               <thead>
               <tr className='tr_'>
                  <th>Disciplina</th>
                  <th>Dia</th>
                  <th>Horário</th>
               </tr>
               </thead>
               <tbody className="item-turma-table">
                  {
                     data.map(item => {
                        return(
                           <tr>
                              <td>{item.disciplina.nome}</td>
                              <td>{item.diaSemana}</td>
                              <td>{item.horario}</td>
                           </tr>
                        )
                     })
                  }
               </tbody>
            </table>
      </Fragment>
  )
}
