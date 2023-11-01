import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap'

import "./TableTurma.css"
import API from '../../../../services/API';

export default function TableTurma({data}) {
  return (
         <Fragment>
         <table className="table_">
               <thead>
               <tr className="tr_">
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
                                 <Link className='edit-link' to={`${item.disciplina.id}/turma/editarTurma/${item.id}`}>
                                    <span className="material-symbols-rounded">
                                       edit_square
                                    </span>
                                 </Link>
                                 <button className='edit-link' onClick={(e) => {
                                    e.preventDefault()

                                    API.del("turmas", item.id)

                                    alert("Turma deletada com sucesso")
                                 }}>
                                    <span className="material-symbols-rounded">
                                       delete
                                    </span>
                                 </button>
                              </td>
                           </tr>
                        )
                     })
                  }
               </tbody>
            </table>
      </Fragment>
  )
}
