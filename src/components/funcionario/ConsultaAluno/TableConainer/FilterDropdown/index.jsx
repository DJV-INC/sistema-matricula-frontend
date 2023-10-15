import React from 'react'
import { Link } from 'react-router-dom'

import "./style.css"
import { Button } from 'reactstrap'

export default function FilterDropdown({setTipoPesquisa}) {
   return (
      <div className="dropdown-filter-container">
         <h5>Filtrar por</h5>
         <Button className="link-container" onClick={setTipoPesquisa("cpf")}>
            <span class="material-symbols-rounded">done</span>
            <span>CPF</span>
         </Button>
         <Button className="link-container" onClick={setTipoPesquisa("rg")}>
            <span class="material-symbols-rounded"></span>
            <span>RG</span>
         </Button>
         {/* <Button className="link-container" onClick={setTipoPesquisa("false")}>
            <span class="material-symbols-rounded"></span>
            <span>Nenhum filtro</span>
         </Button> */}
      </div>
   )
}
