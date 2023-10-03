import React, { Fragment , useEffect, useState} from "react";
import { Button, Table } from "reactstrap";

import './style.css'
import API from "../../../../services/API";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import Status from "../../Status";

export default function ContentTable() {
  const [data, setData] = useState({dados: []})
  const [dropdown, setDropdown] = useState(false)

  useEffect(() => {
    API.get("http://localhost:8080/api/v1/alunos").then((res) => {
      setData(res)
    })
  }, []);

  

  function dropdownToggle(event) {
    const nodelistDropdowns = document.querySelectorAll(".dropdown-container")
    
    for(let i = 0; i < nodelistDropdowns.length; i++){
      nodelistDropdowns[i].classList.remove("active")
    }

    const btn = event.currentTarget

    btn.querySelector(".dropdown-container").classList.add("active")

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
                        <button className="options-btn" onClick={dropdownToggle}>
                          <span className="material-symbols-rounded">more_vert</span>
                          <Dropdown id={item.cpf}/>
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
