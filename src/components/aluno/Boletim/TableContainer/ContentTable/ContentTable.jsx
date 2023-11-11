import React, { Fragment, useEffect, useState } from "react";
import './ContentTable.css'

export default function ContentTable({ contentData }) {
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

        <table className="table_">
          <thead>
            <tr className="tr_">
              <th>Disciplina</th>
              <th>Professor</th>
              <th>Faltas</th>
              <th>Nota</th>
              <th>Conceito</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Harmonia</td>
              <td>Dante</td>
              <td>0</td>
              <td>8.5</td>
              <td>Aprovado</td>
            </tr>
          </tbody>
        </table>

      </Fragment>
    );
  } catch (error) {

  }

}
