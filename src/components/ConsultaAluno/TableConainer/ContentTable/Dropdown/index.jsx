import React from 'react'
import { Link } from 'react-router-dom'

import "./style.css"

export default function Dropdown(props) {
   return (
      <div className="dropdown-container">
         <div className="link-container">
            <Link to={`/consultar/${props.id}`}>Visualizar aluno</Link>
         </div>
         <Link to={`/editar/${props.id}`}>Editar aluno</Link>
         <Link to={"/adicionar"}>Inserir boletim</Link>
         <Link to={"/"}>Excluir aluno</Link>
      </div>
   )
}
