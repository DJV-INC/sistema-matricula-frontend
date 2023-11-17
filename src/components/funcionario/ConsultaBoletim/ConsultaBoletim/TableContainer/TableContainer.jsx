import React, { Fragment, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ContentTable from "./ContentTable/ContentTable";
import API from "../../../../../services/API";
import Select from "../../../../global/Select/Select";

import "./TableContainer.css";

export default function TableContainer({cpf}) {


  const [aluno, setAluno] = useState([])

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
    API.get ("alunos", `cpf=${cpf}`).then(res => {
      console.log(res.dados);
      setAluno(res.dados)
    })
  }, [])

  console.warn(aluno.id);

  useEffect(() => {
    API.get("boletim", `aluno_id=${aluno.id}`).then(res => {
      setData(res.dados)
    })
  }, [aluno]);


  return (
    <Fragment>

      <header className="header-table-b">

        <div className="right-header-boletim">

          <Select state={tipoPesquisa} setState={setTipoPesquisa} icon={"expand_more"} placeholder="Semestre">

            <option value="status">1° Semestre de 2023</option>

          </Select>

          <Link to={`/editarBoletim/${12345678910}`} className="link-btn-add-boletim">
            <button className="adicionar-boletim" type="button"> Editar Boletim</button>
          </Link>
          <Link to={`/inserirBoletim/${cpf}`} className="link-btn-add-boletim">
            <button className="adicionar-boletim" type="button"> Adicionar Boletim</button>
          </Link>
        </div>

      </header>

      <ContentTable contentData={data} />

    </Fragment>
  );
}
