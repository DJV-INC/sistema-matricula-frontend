import React from 'react'

export default function Vagas(props) {
   const nAlunos = props.nAlunos;
   const nVagas = props.nVagas;

   if(nAlunos < nVagas){
      return (
         <span className="vagas_true">
            {nAlunos}/{nVagas}
         </span>
      )
   }

   if (nAlunos == nVagas) {
      return (
         <span className="vagas_false">
            {nAlunos}/{nVagas}
         </span>
      )
   }

   return (
      <span>0/0</span>
   )
}