import React from 'react'
import "./FilterDropdown.css"

export default function FilterDropdown({setTipoPesquisa, tipoPesquisa}) {   
   const contentBtn = [
      {
         type: "",
         title: "Sem Filtros",
         active: false
      },
      {
         type: "rg",
         title: "RG",
         active: false
      },
      {
         type: "cpf",
         title: "CPF",
         active: false
      }
   ]

   const buttons = contentBtn.map(item => {

      if (item.type === tipoPesquisa) {
         console.log(item.type, tipoPesquisa);
         item.active = true
      } else {
         item.active = false
      }

      return (
         <button className={`link-container ${(item.active ? "active" : "")}`} onClick={() => {setTipoPesquisa(item.type)}}>
            <span class="material-symbols-rounded">{item.active ? "done" : ""}</span>
            <span>{item.title}</span>
         </button>
      )


   })

   return (
      <div className="dropdown-filter-container">

         <h5>Filtrar por</h5>
         
         {buttons}
      </div>
   )
}
