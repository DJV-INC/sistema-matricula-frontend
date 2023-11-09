import React from "react";

import "./Modal.css";
import AddAluno from "./AddAluno/AddAluno";
import InfoAluno from "./InfoAluno/InfoAluno";
import { useNavigate, useParams } from "react-router-dom";
import EditAluno from "./EditAluno/EditAluno";
import DeleteAluno from "./DeleteAluno/DeleteAluno";

export default function Modal() {
   const { modalType = null , id: cpf = null } = useParams()
   const navigate = useNavigate()

   function closeModal(e) {
      if (e) {
         e.preventDefault()
      }
      navigate(-1)
   }
   
   if (modalType === "adicionar") {
      return (
         <div
           className={"modal"}
         >
            <AddAluno close={closeModal}/>
         </div>
      );
   }

   if (modalType === "editar") {
      return (
         <div
           className={"modal"}
         >
            <EditAluno close={closeModal}/>
         </div>
      );
   }

   if (modalType === "consultar") {
      return (
         <div
           className={"modal"}
         >
            <InfoAluno close={closeModal}/>
         </div>
      );
   }

   if (modalType === "excluir") {
      return (
         <div
           className={"modal"}
         >
            <DeleteAluno cpf={cpf} close={closeModal}/>
         </div>
      );
   }
}
