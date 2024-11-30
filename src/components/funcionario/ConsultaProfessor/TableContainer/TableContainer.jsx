import React, { Fragment, useState, useEffect } from "react";
import { Button, Input } from "reactstrap";

import Modal from "../Modal/Modal";
import { Link, useParams } from "react-router-dom";
import ContentTable from "./ContentTable/ContentTable";
import API from "../../../../services/API";
import ConsultaTurmaProfessor from "../../ConsultaTurmaProfessor/ConsultaTurmaProfessor";
import Select from "../../../global/Select/Select";
// import FilterDropdown from "./FilterDropdown/FilterDropdown";

export default function TableContainer() {
  const params = useParams()

  const [data, setData] = useState({ dados: [] })
  const [pesquisa, setPesquisa] = useState(null)
  const [tipoPesquisa, setTipoPesquisa] = useState("")
  const [dropdownPesquisa, setDropdownPesquisa] = useState([])
  const [id, setId] = useState(false)

  function handleFilter(e) {
    setPesquisa(e.target.value)
  }

  useEffect(() => {
    if (tipoPesquisa === "nomeCompleto") {
      API.get("professores", `nomeCompleto=${pesquisa}`).then((res) => {
        setData({ dados: [res.dados] })
      })
      console.log(`nomeCompleto=${pesquisa}`)
      console.log(data)
    }
    if (tipoPesquisa === "cpf") {
      API.get("professores", `cpf=${pesquisa}`).then((res) => {
        setData({ dados: [res.dados] })
      })
    }
    if (!tipoPesquisa || tipoPesquisa === "") {
      API.get("professores").then((res) => {
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
            <option value="cpf">CPF</option>
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
            <span>Adicionar professor</span>
          </Link>

        </div>
      </header>

      <Modal />
      <div className="content-tables">
        <div className="left">
          <ContentTable contentData={data} setId={setId} />
        </div>
        <div className="right">
          <ConsultaTurmaProfessor id={id} />
        </div>


      </div>


    </Fragment>
  );
}
