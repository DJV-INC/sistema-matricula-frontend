import React, { Fragment, useEffect, useState } from "react";
import { Button, Table } from "reactstrap";

import './style.css'
import API from "../../../../../services/API";
import { Link, useParams } from "react-router-dom";
import Dropdown from "./Dropdown";
import Status from "../../Status";

export default function ContentTable({ contentData }) {
  const params = useParams()

  const [dropdown, setDropdown] = useState(false)
  const [data, setData] = useState({ dados: [] })

  useEffect(() => {
    setData(contentData)
  }, [contentData]);

  function dropdownToggle(event) {
    const nodelistDropdowns = document.querySelectorAll(".dropdown-container")
    const btn = event.currentTarget

    for (let i = 0; i < nodelistDropdowns.length; i++) {
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
      for (let i = 0; i < nodelistDropdowns.length; i++) {
        nodelistDropdowns[i].classList.remove("active")
      }
    }


  }

  try {

    return (
      <Fragment>
        <div className="Tabelas">
          <div className="TabDisciplina">
            <Table striped>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Disciplina</th>
                  <th>Tipo</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.dados.map((item) => {
                    return (
                      <tr>
                        <th scope="row">{item.id}</th>
                        <td>{item.nome}</td>
                        <td>{item.tipo}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>
          </div>
          <div className="TabProfessor">

            <h1>Teoria Musical 1</h1>

            <Table striped>
              <thead>
                <tr>
                  <th>Professor</th>
                  <th>Dia</th>
                  <th>Horário</th>
                  <th>Vagas</th>
                  {/* <th>Opções</th> */}
                </tr>
              </thead>
              <tbody>
                {
                  data.dados.map((item) => {
                    return (
                      <tr>
                        <th scope="row">{item.id}</th>
                        <td>{item.nome}</td>
                        <td>{item.tipo}</td>
                        <td></td>
                        <td>
                          {/* <button className="options-btn" onClick={dropdownToggle}>
                            <span className="material-symbols-rounded">more_vert</span>
                            <Dropdown id={item.id} />
                          </button> */}
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>
          </div>
        </div>
      </Fragment>
    );
  } catch (error) {

  }

}
