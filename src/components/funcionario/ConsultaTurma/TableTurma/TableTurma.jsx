import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap'

import "./TableTurma.css"

export default function TableTurma({data}) {
  return (
         <Fragment>
         <div className="Tabelas">
         <div className="TabDisciplina">
            <Table striped>
               <thead>
               <tr>
                  <th>Professor</th>
                  <th>Dia</th>
                  <th>Horário</th>
                  <th>Vagas</th>
                  <th></th>
               </tr>
               </thead>
               <tbody className="item-turma-table">
                  {
                     data.map(item => {
                        return(
                           <tr>
                              <td>{item.professor.nomeCompleto}</td>
                              <td>{item.diaSemana}</td>
                              <td>{item.horario}</td>
                              <td>{item.numeroAlunos}/{item.numeroVagas}</td>
                              <td>
                                 <Link className='edit-link' to={""}>
                                    <span className="material-symbols-rounded">
                                       edit_square
                                    </span>
                                 </Link>
                              </td>
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
