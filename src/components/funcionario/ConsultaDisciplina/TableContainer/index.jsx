import React, { Fragment, useState, useEffect } from "react";
import { Button, Input } from "reactstrap";

import "./style.css";
import Modal from "../Modal";
import { Link, useParams } from "react-router-dom";
import ContentTable from "./ContentTable";
import API from "../../../../services/API";
import FilterDropdown from "./FilterDropdown";

export default function TableContainer() {
  const params = useParams()

  const [data, setData] = useState({dados: []})
  const [pesquisa, setPesquisa] = useState(null)
  const [tipoPesquisa, setTipoPesquisa] = useState("")
  const [dropdownPesquisa, setDropdownPesquisa] = useState([])

  function handleFilter(e) {
    setPesquisa(e.target.value)
  }

  function dropdownToggle() {
    const filterDropdown = document.querySelectorAll(".dropdown-filter-container")[0]

    setDropdownPesquisa(!dropdownPesquisa)

    if (dropdownPesquisa) {
      filterDropdown.classList.add("active")
    } else {
      filterDropdown.classList.remove("active")
    }
  }

  useEffect(() => {
    if (tipoPesquisa === "nome") {
      API.get("disciplinas", `nome=${pesquisa}`).then((res) => {
        setData({dados: [res.dados]})
      })
    }
    if (!tipoPesquisa || tipoPesquisa === "") {
      API.get("disciplinas").then(res => {
        setData(res)
      })
    }
    
  }, [params, pesquisa, tipoPesquisa]);

  return (
    <Fragment>

      <header className="header-table">
      <div className="right-header">
          <Input className="pesquisa-input" placeholder="Pesquisar" onChange={handleFilter}/>
          <Button className="table-btn filtro-btn" id="btn-handle-filter" onClick={dropdownToggle}>
            <span>Filtro</span>
            <span class="material-symbols-rounded">tune</span>
          </Button>
          <FilterDropdown setTipoPesquisa={setTipoPesquisa} tipoPesquisa={tipoPesquisa} />
        </div>

        <div className="left-header">
          <span>1 de 10</span>
          <Button className="table-btn">
            <span class="material-symbols-rounded">chevron_left</span>
          </Button>
          <Button className="table-btn">
            <span class="material-symbols-rounded">chevron_right</span>
          </Button>
          <Link to={"adicionar"} className="add-aluno-btn">
            <span class="material-symbols-rounded">add</span>
            <span>Adicionar Disciplina</span>
          </Link>

        </div>
      </header>

      <Modal />

      <ContentTable contentData={data} />

    </Fragment>
  );
}
