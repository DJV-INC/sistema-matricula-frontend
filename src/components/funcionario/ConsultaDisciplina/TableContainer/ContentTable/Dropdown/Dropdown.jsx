import React from 'react'
import { Link } from 'react-router-dom'

import './Dropdown.css'

export default function Dropdown(props) {
   return (
      <div className="dropdown-container">
         <Link className="link-container" to={`editar/${props.id}`}>
            <span class="material-symbols-rounded">edit</span>
            <span>Editar Disciplina</span>
         </Link>
         <Link className="link-container" to={`excluir/${props.id}`}>
            <span class="material-symbols-rounded">delete</span>
            <span>Excluir Disciplina</span>
         </Link>
      </div>
   )
}
