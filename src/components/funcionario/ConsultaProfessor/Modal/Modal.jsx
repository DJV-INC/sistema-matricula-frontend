import React from "react";

import "./Modal.css";
import { useNavigate, useParams } from "react-router-dom";
import AddProfessor from "./AddProfessor/AddProfessor";
import DeleteProfessor from "./DeleteProfessor/DeleteProfessor";
import EditProfessor from "./EditProfessor/EditProfessor";

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
            <AddProfessor func={closeModal}/>
         </div>
      );
   }

   if (modalType === "editar") {
      return (
         <div
           className={"modal"}
         >
            {<EditProfessor/>}
         </div>
      );
   }

   if (modalType === "excluir") {
      return (
         <div
           className={"modal"}
         >
            <DeleteProfessor id={id} func={closeModal}/>
         </div>
      );
   }
}
