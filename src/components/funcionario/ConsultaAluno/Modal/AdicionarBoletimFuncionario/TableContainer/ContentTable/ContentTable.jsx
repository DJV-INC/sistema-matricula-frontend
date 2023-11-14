import React, { Fragment, useEffect, useState } from "react";
import './ContentTable.css'

export default function ContentTable({ contentData }) {
  const [data, setData] = useState({ dados: [] })

  useEffect(() => {
    setData(contentData)
  }, [contentData]);

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
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Harmonia</td>
              <td>Dante</td>
              <td>1</td>
              <td>9.5</td>
              <td>Aprocado</td>
              <td>
                <button className="options-btn">
                  <span className="material-symbols-rounded">more_vert</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>

    </Fragment>
  );

  // try {

  //   if (data.length === 0) {
  //     return(
  //       <div className="empty-container">
  //         <h4>Nenhum boletim registrado</h4>
  //       </div>
  //     )
  //   }

  //   return (
  //     <Fragment>
  //       <table className="table_">
  //         <thead>
  //           <tr className="tr_">
  //             <th>Disciplina</th>
  //             <th>Professor</th>
  //             <th>Faltas</th>
  //             <th>Nota</th>
  //             <th>Conceito</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {
  //             data.map(item => {
  //               console.log(item)
  //               return(
  //                 <tr>
  //                   <td>Harmonia</td>
  //                   <td>Dante</td>
  //                   <td>{item.faltas}</td>
  //                   <td>{item.notaFinal}</td>
  //                   <td>{item.conceito}</td>
  //                 </tr>
  //               )
  //             })
  //           }
  //         </tbody>
  //       </table>

  //     </Fragment>
  //   );
  // } catch (error) {

  //   console.error(error)

  //   return (
  //     <div className="empty-container">
  //       <h4>Erro de exibição (veja no Dev Tools)</h4>
  //     </div>
  //   )
  // }
}
