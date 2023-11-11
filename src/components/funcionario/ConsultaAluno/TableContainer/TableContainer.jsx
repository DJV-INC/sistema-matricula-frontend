import React, { Fragment, useState, useEffect } from "react";
import { Button, Input } from "reactstrap";

import Modal from "../Modal/Modal";
import { Link, useParams } from "react-router-dom";
import ContentTable from "./ContentTable/ContentTable";
import API from "../../../../services/API";
import FilterDropdown from "./FilterDropdown/FilterDropdown";
import Select from "../../../global/Select/Select";

export default function TableContainer() {
  const params = useParams()

  const [data, setData] = useState({ dados: [] })
  const [pesquisa, setPesquisa] = useState(null)
  const [tipoPesquisa, setTipoPesquisa] = useState("")
  const [dropdownPesquisa, setDropdownPesquisa] = useState([])

  function handleFilter(e) {
    setPesquisa(e.target.value)
  }

  function dropdownToggle(event) {
    const filterDropdown = document.querySelectorAll(".dropdown-filter-container")[0]

    setDropdownPesquisa(!dropdownPesquisa)

    if (dropdownPesquisa) {
      filterDropdown.classList.add("active")
    } else {
      filterDropdown.classList.remove("active")
    }
  }

  useEffect(() => {
    if (tipoPesquisa === "rg") {
      API.get("alunos", `rg=${pesquisa}`).then((res) => {
        setData({ dados: [res.dados] })
      })
    }
    if (tipoPesquisa === "cpf") {
      API.get("alunos", `cpf=${pesquisa}`).then((res) => {
        setData({ dados: [res.dados] })
      })
    }
    if (tipoPesquisa === "status") {
      API.get("alunos", `status=${pesquisa}`).then((res) => {
        console.log(pesquisa)
        setData({ dados: [res.dados]})
      })
    }
    if (!tipoPesquisa || tipoPesquisa === "") {
      API.get("alunos").then((res) => {
        setData(res)
      })
    }
  }, [params, pesquisa, tipoPesquisa]);

  return (
    <Fragment>

      <header className="header-table">
        <div className="right-header">
          <div className="searchbar">
            <span class="material-symbols-rounded">
              search
            </span>
            <input type="text" className="search" placeholder="Pesquisar por" onChange={handleFilter} />
          </div>

          <Select state={tipoPesquisa} setState={setTipoPesquisa} icon={"tune"} placeholder="Sem Filtro">
            <option value="status">Status</option>
            <option value="cpf">CPF</option>
            <option value="rg">RG</option>
          </Select>

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
            <span>Adicionar aluno</span>
          </Link>

        </div>
      </header>

      <Modal />

      <ContentTable contentData={data} />

    </Fragment>
  );
}
