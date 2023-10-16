import React from "react";

import "./style.css";
import { useNavigate, useParams } from "react-router-dom";
import AddDiciplina from "./AddDisciplina/AddDiciplina";

export default function Modal() {
   const { modalType = null , id: cpf = null } = useParams()
   const navigate = useNavigate()

   function closeModal() {
      navigate(-1)
   }
   
   if (modalType === "adicionar") {
      return (
         <div
           className={"modal"}
         >
            <AddDiciplina func={closeModal}/>
         </div>
      );
   }

   if (modalType === "editar") {
      return (
         <div
           className={"modal"}
         >
            {/* <EditAluno func={closeModal}/> */}
         </div>
      );
   }

   if (modalType === "consultar") {
      return (
         <div
           className={"modal"}
         >
            {/* <InfoAluno func={closeModal}/> */}
         </div>
      );
   }

   if (modalType === "excluir") {
      return (
         <div
           className={"modal"}
         >
            {/* <DeleteAluno cpf={cpf} func={closeModal}/> */}
         </div>
      );
   }
}
