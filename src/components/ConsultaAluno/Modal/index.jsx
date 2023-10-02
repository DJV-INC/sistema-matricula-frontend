import React from "react";

import "./style.css";
import { useEffect, useState } from "react";
import AddAluno from "./AddAluno";
import InfoAluno from "./InfoAluno";
import { useLocation, useParams } from "react-router-dom";

export default function Modal({ openModal, closeModal, typemodal }) {

   // const [isModalOpen, setIsModalOpen] = useState(false);

   const { modalType = null, id = null } = useParams()

   // useEffect(() => {
   //    if (openModal) {
   //       setIsModalOpen(true)
   //    } else {
   //       setIsModalOpen(false)
   //    }
   //    // if (isModalOpen) {
   //    //    console.log("aa");
   //    //    document.body.classList.add("modal-open");
   //    // } else {
   //    //    document.body.classList.remove("modal-open");
   //    // }
   // }, [openModal]);


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
            <AddAluno/>
         </div>
      );
   }

   if (modalType === "consultar") {
      return (
         <div
           className={"modal"}
           onClick={closeModal}
         >
            <InfoAluno/>
         </div>
      );
   }

   
}
