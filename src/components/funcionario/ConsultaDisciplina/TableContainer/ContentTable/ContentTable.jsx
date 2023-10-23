import React, { Fragment, useEffect, useState } from "react";
import { Table } from "reactstrap";
import Dropdown from "./Dropdown/Dropdown";

import './ContentTable.css'

export default function ContentTable({ contentData, setId }) {

  const [data, setData] = useState({ dados: [] })

  useEffect(() => {
    setData(contentData)
  }, [contentData]);

  function handleRowTable(id) {
    setId(id)
  }

  try {

    return (
      <Fragment>
        <div className="Tabelas">
          <div className="TabDisciplina">
            <Table striped>
              <thead>
                <tr>
                  <th>Disciplina</th>
                  <th>Tipo</th>
                </tr>
              </thead>
              <tbody className="item-disciplina-table">
                {
                  data.dados.map((item) => {
                    return (
                      <tr onClick={() => {handleRowTable(item.id)}}>
                        <td>{item.nome}</td>
                        <td>{item.tipo}</td>
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
