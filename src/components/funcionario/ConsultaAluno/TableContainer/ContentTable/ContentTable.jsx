import React, { Fragment , useEffect, useState} from "react";
import { Table } from "reactstrap";
import Dropdown from "./Dropdown/Dropdown";
import Status from "../../Status";

import './ContentTable.css'

export default function ContentTable({contentData}) {
  const [dropdown, setDropdown] = useState(false)
  const [data, setData] = useState({dados: []})

  useEffect(() => {
      setData(contentData)
  }, [contentData]);

  function dropdownToggle(event) {
    const nodelistDropdowns = document.querySelectorAll(".dropdown-container")
    const btn = event.currentTarget
    
    for(let i = 0; i < nodelistDropdowns.length; i++){
      setDropdown(false)
      nodelistDropdowns[i].classList.remove("active")
    }
    
    document.body.addEventListener("click", (e) => {
      console.log(e.target);
      if (e.target !== btn || e.target !== btn.querySelector(".dropdown-container") || e.target !== event.target) {
        if (dropdown) {
          setDropdown(false)
        } else {
          setDropdown(true)
        }
      }
    })
    
    if (!dropdown) {
      btn.querySelector(".dropdown-container").classList.add("active")
    } else {
      btn.querySelector(".dropdown-container").classList.remove("active")
      for(let i = 0; i < nodelistDropdowns.length; i++){
        nodelistDropdowns[i].classList.remove("active")
      }
    }
  }

  try {
    
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
  } catch (error) {
    
  }

}
