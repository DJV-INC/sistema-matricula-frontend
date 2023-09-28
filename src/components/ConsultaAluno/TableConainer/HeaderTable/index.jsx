import React from "react";
import { Button, Input } from "reactstrap";

import "./style.css";

export default function HeaderTable() {
  return (
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
        <Button className="add-aluno-btn">
          <span class="material-symbols-rounded">add</span>
          <span>Adicionar aluno</span>
        </Button>
      </div>
    </header>
  );
}
