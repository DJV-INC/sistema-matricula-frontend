import React, { Fragment, useEffect, useState } from "react";
import { Table } from "reactstrap";
import Dropdown from "./Dropdown/Dropdown";

import './ContentTable.css'

export default function ContentTable({ contentData, setId, setNomeDisciplina }) {

  const [data, setData] = useState({ dados: [] })

  useEffect(() => {
    setData(contentData)
  }, [contentData]);

  function handleRowTable(id, nome, event) {
    const container = event.currentTarget.parentNode
    const trList = container.getElementsByTagName("tr")

    for (let index = 0; index < trList.length; index++) {
      trList[index].classList.remove("active")
    }

    setId(id)
    setNomeDisciplina(nome)

    event.currentTarget.classList.add("active")
  }

  try {

    return (
      <Fragment>
            <table className="table_ disciplina_">
              <thead>
                <tr className="tr_">
                  <th>Disciplina</th>
                  <th>Tipo</th>
                </tr>
              </thead>
              <tbody className="item-table">
                {
                  data.dados.map((item) => {
                    return (
                      <tr onClick={(e) => {handleRowTable(item.id, item.nome , e)}}>
                        <td>{item.nome}</td>
                        <td>{item.tipo}</td>
                      </tr>
                      
                    )
                  })
                }
              </tbody>
            </table>
      </Fragment>
    );
  } catch (error) {

  }

}
