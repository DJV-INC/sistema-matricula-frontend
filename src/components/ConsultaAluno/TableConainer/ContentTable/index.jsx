import React, { Fragment , useEffect, useState} from "react";
import { Button, Table } from "reactstrap";

import './style.css'
import API from "../../../../services/API";
import Status from "./Status";
import { Link } from "react-router-dom";

export default function ContentTable() {
  const [data, setData] = useState({dados: []})
  const [dropdown, setDropdown] = useState(false)

  useEffect(() => {
    API.get("http://localhost:8080/api/v1/alunos").then((res) => {
      setData(res)
    })
  }, []);

  function dropdownToggle(id, target) {
    setDropdown(false)
  
    return(
      <div className="dropdown">
        <button>Visualizar aluno</button>
        <button>Inserir imagem</button>
        <button>Excluir</button>
      </div>
    )
  }

  return (
    <Fragment>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>RG</th>
            <th>CPF</th>
            <th>Email</th>
            <th>Status</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {
            data.dados.map((item) => {
               return (
                  <tr>
                    <th scope="row">{item.id}</th>
                    <td>{item.nomeCompleto}</td>
                    <td>{item.rg}</td>
                    <td>{item.cpf}</td>
                    <td>{item.email}</td>
                    <td><Status status={item.statusMatricula}/></td>
                    <td>
                        <button className="options-btn" onClick={(e) => {dropdownToggle(item.id, e.target)}}>
                          <span className="material-symbols-rounded">more_vert</span>
                        </button>
                    </td>
                  </tr>
               )
            })
          }
        </tbody>
      </Table>
    </Fragment>
  );
}
