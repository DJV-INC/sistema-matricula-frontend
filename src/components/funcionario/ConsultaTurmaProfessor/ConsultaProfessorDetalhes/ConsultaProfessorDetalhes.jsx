import React, { Fragment } from 'react'

import { Table } from 'reactstrap'

//import "./TableTurmaProfessor.css"

export default function ConsultaProfessorDetalhes(dadosProf) {
    let data = dadosProf.data
    console.log(data)
  return (
         <Fragment>
            <table className='table_'>
               <thead>
               <tr className='tr_'>
                  <th>Nome</th>
                  <th>CPF</th>
                  <th>Telefone</th>
               </tr>
               </thead>
               <tbody className="item-turma-table">
                           <tr>
                              <td>{data.nomeCompleto}</td>
                              <td>{data.cpf}</td>
                              <td>{data.telefone}</td>
                           </tr>
               </tbody>
            </table>
      </Fragment>
  )
}
