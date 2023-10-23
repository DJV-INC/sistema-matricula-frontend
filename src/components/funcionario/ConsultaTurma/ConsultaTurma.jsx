import React, { Fragment } from 'react'
import './ConsultaTurma.css'


export default function ConsultaTurma({data = null}) {
   
   if (data !== null) {

      return(
         <div className='turma-table content-table'>

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
