import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap'

import "./TableTurmaProfessor.css"

export default function TableTurmaProfessor({data}) {
  return (
         <Fragment>
         <div className="Tabelas">
         <div className="TabDisciplina">
            <Table striped>
               <thead>
               <tr>
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
            </Table>
         </div>
         </div>
      </Fragment>
  )
}
