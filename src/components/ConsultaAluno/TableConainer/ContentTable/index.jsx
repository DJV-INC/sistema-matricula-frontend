import React, { Fragment , useEffect, useState} from "react";
import { Table } from "reactstrap";

import './style.css'
import API from "../../../../services/API";

export default function ContentTable() {
   const [data, setData] = useState({dados: []})

   useEffect(() => {
         API.get("http://localhost:8080/api/v1/alunos").then((res) => {
            setData(res)
         })
      }, []);

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
                     <td>{toString(item.status)}</td>
                     <td>...</td>
                  </tr>
               )
            })
          }
        </tbody>
      </Table>
    </Fragment>
  );
}
