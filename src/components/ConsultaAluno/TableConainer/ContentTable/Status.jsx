import React from 'react'

export default function Status(props) {
   const status = props.status;

   if(status){
      return (
         <span className="status-aluno true">
            Matriculado
         </span>
      )
   }

   if (!status) {
      return (
         <span className="status-aluno false">
            Não matriculado
         </span>
      )
   }

   return (
      <div>Sem dados</div>
   )
}
