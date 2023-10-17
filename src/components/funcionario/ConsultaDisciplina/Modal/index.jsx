import React from "react";

import "./style.css";
import { useNavigate, useParams } from "react-router-dom";
import AddDiciplina from "./AddDisciplina/AddDiciplina";
import DeleteDisciplina from "./DeleteDisciplina/DeleteDisciplina";

export default function Modal() {
   const { modalType = null , id = null } = useParams()
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
            {alert("foi")}
         </div>
      );
   }

   if (modalType === "excluir") {
      return (
         <div
           className={"modal"}
         >
            <DeleteDisciplina id={id} func={closeModal}/>
         </div>
      );
   }
}
