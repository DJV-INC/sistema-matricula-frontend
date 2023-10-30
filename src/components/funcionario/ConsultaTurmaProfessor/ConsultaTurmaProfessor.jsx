import React, { Fragment, useEffect, useState } from 'react'
import './ConsultaTurmaProfessor.css'
import TableTurmaProfessor from './TableTurmaProfessor/TableTurmaProfessor'
import API from '../../../services/API'
import { Link } from 'react-router-dom'
//import Modal from './Modal/ModalTurma'
//import ModalTurma from './Modal/ModalTurma'


export default function ConsultaTurmaProfessor({id = null, disciplina = null}) {

   const [data, setData] = useState(null)

   useEffect(() => {
      if (id) {
         API.get("turmas", `id_professor=${id}`).then(res => {
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
                  <TableTurmaProfessor data={data.dados}/>
               )
            }
         }
      }

      return(
         <div className='turma-table content-table'>
            <h5 className='title'>Disciplinas ministradas</h5>

            {/* <div className="buttons">
               <Link to={""}>
                  <button className='edit-btn'>
                     <span className="material-symbols-rounded">delete</span>
                     <span>Excluir Turmas</span>
                  </button>
               </Link>
               <Link to={"turma/adicionarTurma"}>
                  <button className='add-btn'>
                     <span className="material-symbols-rounded">add</span>
                     <span>Adicionar Turmas</span>
                  </button>
               </Link>
            </div> */}

            <div className='table'>
               {placeholderData()}
            </div>

            {/*<ModalTurma/>*/}

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
