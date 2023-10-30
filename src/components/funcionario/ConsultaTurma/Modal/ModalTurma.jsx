import React from "react";

import "./Modal.css";
import { useNavigate, useParams } from "react-router-dom";
import AddTurma from "./AddTurma/AddTurma";

export default function ModalTurma() {
   const { modalType = null , idDisciplina = null } = useParams()

   const navigate = useNavigate()

   function closeModal() {
      navigate(-1)
   }
   
   if (modalType === "adicionarTurma") {
      return (
         <div
           className={"modal"}
         >
            <AddTurma func={closeModal} idDisciplina={idDisciplina}/>
         </div>
      );
   }

   if (modalType === "editarTurma") {
      return (
         <div
           className={"modal"}
         >
            {/* <EditAluno func={closeModal}/> */}
         </div>
      );
   }

   if (modalType === "consultarTurma") {
      return (
         <div
           className={"modal"}
         >
            {/* <InfoAluno func={closeModal}/> */}
         </div>
      );
   }

   if (modalType === "excluirTurma") {
      return (
         <div
           className={"modal"}
         >
            {/* <DeleteAluno cpf={cpf} func={closeModal}/> */}
         </div>
      );
   }
}
