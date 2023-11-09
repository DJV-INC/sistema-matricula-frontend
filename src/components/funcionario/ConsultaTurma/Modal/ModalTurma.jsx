import React from "react";

import "./Modal.css";
import { useNavigate, useParams } from "react-router-dom";
import AddTurma from "./AddTurma/AddTurma";
import EditTurma from "./EditTurma/EditTurma";
import DeleteTurma from "./DeleteTurma/DeleteTurma";

export default function ModalTurma() {
   const { modalType = null , idDisciplina = null , idTurma = null } = useParams()

   console.log(idDisciplina, idTurma);

   const navigate = useNavigate()

   function closeModal(e) {
      if (e) {
         e.preventDefault()
      }
      navigate(-1)
   }
   
   if (modalType === "adicionarTurma") {
      return (
         <div
           className={"modal"}
         >
            <AddTurma closeModal={closeModal} idDisciplina={idDisciplina}/>
         </div>
      );
   }

   if (modalType === "editarTurma") {
      return (
         <div
           className={"modal"}
         >
            <EditTurma closeModal={closeModal} idTurma={idTurma} idDisciplina={idDisciplina}/>
         </div>
      );
   }

   if (modalType === "excluirTurma") {
      return (
         <div
           className={"modal"}
         >
            <DeleteTurma closeModal={closeModal}/>
         </div>
      );
   }
}
