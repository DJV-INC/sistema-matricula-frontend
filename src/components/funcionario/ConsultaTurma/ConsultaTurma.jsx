import React, { Fragment, useEffect, useState } from 'react'
import './ConsultaTurma.css'
import TableTurma from './TableTurma/TableTurma'
import API from '../../../services/API'
import { Link } from 'react-router-dom'
import ModalTurma from './Modal/ModalTurma'


export default function ConsultaTurma({id = null, disciplina = null}) {

   const [data, setData] = useState(null)

   useEffect(() => {
      if (id) {
         API.get("turmas", `id=${id}`).then(res => {
            setData(res)
         }).catch((e) => {
            alert(e)
         })
      }
    }, [id])
   
   if (data !== null) {

      function placeholderData() {
         if (Array.isArray(data.dados)) {
            if (data.dados.length === 0) {
               return (
                  <h5>Nenhuma turma existente para essa disciplina</h5>          
               )
            } else {
               return (
                  <Fragment>
                     <TableTurma data={data.dados}/>
                     <ModalTurma turma={data.dados}/>
                  </Fragment>
                  
               )
            }
         }
      }

      return(
         <div className='turma-table content-table'>
            <h5 className='title'>{disciplina}</h5>

            <div className="buttons">
               <Link to={`${id}/turma/excluirTurma`}>
                  <button className='edit-btn'>
                     <span className="material-symbols-rounded">delete</span>
                     <span>Excluir Turmas</span>
                  </button>
               </Link>
               <Link to={`${id}/turma/adicionarTurma`}>
                  <button className='add-btn'>
                     <span className="material-symbols-rounded">add</span>
                     <span>Adicionar Turmas</span>
                  </button>
               </Link>
            </div>

            <div className='table_'>
               {placeholderData()}
            </div>
         </div>
      )

   } else {
      return (
         <div className="turma-table empty-table">
            <h5>Selecione uma disciplina para ver as turmas</h5>
         </div>
      )
   }

   
}
