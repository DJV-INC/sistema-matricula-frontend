import React from "react";

import "./style.css";
import AddAluno from "./AddAluno";
import InfoAluno from "./InfoAluno";
import { useNavigate, useParams } from "react-router-dom";
import EditAluno from "./EditAluno";
import DeleteAluno from "./DeleteAluno";

export default function Modal() {
   const { modalType = null , id: cpf = null } = useParams()
   const navigate = useNavigate()

   function closeModal() {
      //console.log(event.target);
      //console.log(event.currentTarget);

      //if (event.target === event.currentTarget) {
         navigate(-1)
      //}
   }
   
   if (modalType === "adicionar") {
      return (
         <div
           className={"modal"}
         >
            <AddAluno func={closeModal}/>
         </div>
      );
   }

   if (modalType === "editar") {
      return (
         <div
           className={"modal"}
         >
            <EditAluno func={closeModal}/>
         </div>
      );
   }

   if (modalType === "consultar") {
      return (
         <div
           className={"modal"}
         >
            <InfoAluno func={closeModal}/>
         </div>
      );
   }

   if (modalType === "excluir") {
      return (
         <div
           className={"modal"}
         >
            <DeleteAluno cpf={cpf} func={closeModal}/>
         </div>
      );
   }
}
