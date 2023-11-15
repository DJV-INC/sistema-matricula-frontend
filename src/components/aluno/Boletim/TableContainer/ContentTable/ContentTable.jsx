import React, { Fragment, useEffect, useState } from "react";
import './ContentTable.css'

export default function ContentTable({ contentData }) {
  const [data, setData] = useState({ dados: [] })

  useEffect(() => {
    setData(contentData)
  }, [contentData]);

  console.log(data)
  try {

    if (data.length === 0) {
      return(
        <div className="empty-container">
          <h4>Nenhum boletim registrado</h4>
        </div>
      )
    }

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
            {
              data.map(item => {
                console.log(item)
                return(
                  <tr>
                    <td>{item.disciplina}</td>
                    <td>{item.professor}</td>
                    <td>{item.faltas}</td>
                    <td>{item.notaFinal}</td>
                    <td>{item.conceito}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>

      </Fragment>
    );
  } catch (error) {

    console.error(error)
    
    return (
      <div className="empty-container">
        <h4>Erro de exibição (veja no Dev Tools)</h4>
      </div>
    )
  }
}
