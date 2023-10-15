import React, { Fragment, useState, useEffect } from "react";
import { Button, Input } from "reactstrap";

import "./style.css";
import Modal from "../Modal";
import { Link, useParams } from "react-router-dom";
import ContentTable from "./ContentTable";
import API from "../../../../services/API";

export default function TableContainer() {
  const params = useParams()

  const [toggleModal, setToggleModal] = useState(false)
  const [data, setData] = useState({ dados: [] })

  function handleFilter(e) {
    console.log(e.target.value);
  }

  useEffect(() => {
    setData({
      dados: [{
        id: 1234,
        nome: "Teoria Musical 1",
        tipo: "Obrigatório"
      }]
    })
  }, [params]);

  return (
    <Fragment>

      <header className="header-table">
        <div className="right-header">
          <Input className="pesquisa-input" placeholder="Pesquisar" onChange={handleFilter} />
          <Button className="table-btn">
            <span class="material-symbols-rounded">tune</span>
            <span>Icon</span>
          </Button>
        </div>

        <div className="left-header">
          <span>1 de 10</span>
          <Button className="table-btn">
            <span class="material-symbols-rounded">chevron_left</span>
          </Button>
          <Button className="table-btn">
            <span class="material-symbols-rounded">chevron_right</span>
          </Button>
          <Link to={"/adicionar"} className="add-aluno-btn">

            <span class="material-symbols-rounded">add</span>
            <span>Adicionar Disciplina</span>
          </Link>

        </div>
      </header>

      <Modal />

      {console.log(data)}

      <ContentTable contentData={data} />

    </Fragment>
  );
}
