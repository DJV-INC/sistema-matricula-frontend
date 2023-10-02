import React, { Fragment, useState, useEffect } from "react";
import { Button, Input } from "reactstrap";

import "./style.css";
import Modal from "../../Modal";
import { Link } from "react-router-dom";

export default function HeaderTable() {
  const [toggleModal, setToggleModal] = useState(false)

  const handleOpen = () => {
    setToggleModal(true);
  };

  const handleClose = () => {
    setToggleModal(false);
  };

  return (
    <Fragment>
      

      <header className="header-table">
        <div className="right-header">
          <Input className="pesquisa-input" placeholder="Pesquisar" />
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
            <span>Adicionar aluno</span>
          </Link>
          
        </div>
      </header>

      <Modal openModal={toggleModal} closeModal={handleClose}/>

    </Fragment>
  );
}
