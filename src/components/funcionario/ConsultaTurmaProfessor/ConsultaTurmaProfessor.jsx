import React, { Fragment, useEffect, useState } from 'react'
import './ConsultaTurmaProfessor.css'
import TableTurmaProfessor from './TableTurmaProfessor/TableTurmaProfessor'
import API from '../../../services/API'
import ConsultaProfessorDetalhes from './ConsultaProfessorDetalhes/ConsultaProfessorDetalhes'
import { Link } from 'react-router-dom'



export default function ConsultaTurmaProfessor({ id = null }) {

   const [data, setData] = useState(null)
   const [dadosProf, setDadosProf] = useState("")

   useEffect(() => {
      
      if (id) {
         API.get("turmas", `id_professor=${id}`).then(res => {
            setData(res)

         }).catch((e) => {
            alert(e)
         })

         API.get("professores", `id=${id}`).then(dados => {
            setDadosProf(dados)
         })
         
      }


   }, [id])



   if (data !== null) {
      function placeholderData() {
         if (Array.isArray(data.dados)) {
            if (data.dados.length === 0) {
               return (
                  <span>Nenhuma turma existente para essa disciplina</span>
               )
            } else {

               return (
                  <>
                     <ConsultaProfessorDetalhes data={dadosProf.dados} />
                     <TableTurmaProfessor data={data.dados} />
                  </>
               )
            }
         }
      }

      return (
         <div className='turma-table content-table'>
            <h3 className="title_sectable">Detalhes do professor</h3>

            <div className="buttons">
               <Link to={`excluir/${dadosProf.dados.id}`}>
                  <button className='edit-btn'>
                     <span className="material-symbols-rounded">delete</span>
                     <span>Excluir professor</span>
                  </button>
               </Link>
               <Link to={`editar/${dadosProf.dados.cpf}`}>
                  <button className='add-btn'>
                     <span className="material-symbols-rounded">edit</span>
                     <span>Editar professor</span>
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
            <h5>Selecione um  professor para ver seus detalhes</h5>
         </div>
      )
   }


}
