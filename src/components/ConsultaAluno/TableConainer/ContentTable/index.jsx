import React, { Fragment } from "react";
import { Table } from "reactstrap";

import './style.css'

export default function ContentTable() {
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
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Mark</td>
            <td>Mark</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Jacob</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>Larry</td>
            <td>Larry</td>
            <td>the Bird</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </Fragment>
  );
}
