import React from "react";

import "./style.css";
import AddAluno from "./AddAluno";
import InfoAluno from "./InfoAluno";
import { useParams } from "react-router-dom";
import EditAluno from "./EditAluno";

export default function Modal({ closeModal, dataModal }) {

   const { modalType = null } = useParams()

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
