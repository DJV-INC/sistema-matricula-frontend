import React from "react";

import "./style.css";
import AddAluno from "./AddAluno";
import InfoAluno from "./InfoAluno";
import { redirect, useNavigate, useParams } from "react-router-dom";
import EditAluno from "./EditAluno";

export default function Modal({ dataModal }) {
   const { modalType = null } = useParams()
   const navigate = useNavigate()

   function closeModal(event) {
      console.log(event.target);
      console.log(event.currentTarget);

      if (event.target === event.currentTarget) {
         navigate(-1)
      }
   }
   
   if (modalType === "adicionar") {
      return (
         <div
           className={"modal"}
           onClick={closeModal}
         >
            <AddAluno/>
         </div>
      );
   }

   if (modalType === "editar") {
      return (
         <div
           className={"modal"}
           onClick={closeModal}
         >
            <EditAluno/>
         </div>
      );
   }

   if (modalType === "consultar") {
      return (
         <div
           className={"modal"}
           onClick={closeModal}
         >
            <InfoAluno dataModal={dataModal}/>
         </div>
      );
   }
}
