import React, { Fragment, useState, useEffect } from "react";
import { Button, Input } from "reactstrap";

import { Link, useParams } from "react-router-dom";
import ContentTable from "./ContentTable/ContentTable";
import API from "../../../../services/API";
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

  // useEffect(() => {
  //   if (tipoPesquisa === "rg") {
  //     API.get("alunos", `rg=${pesquisa}`).then((res) => {
  //       setData({ dados: [res.dados] })
  //     })
  //   }
  //   if (tipoPesquisa === "cpf") {
  //     API.get("alunos", `cpf=${pesquisa}`).then((res) => {
  //       setData({ dados: [res.dados] })
  //     })
  //   }
  //   if (tipoPesquisa === "status") {
  //     API.get("alunos", `status=${pesquisa}`).then((res) => {
  //       console.log(pesquisa)
  //       setData({ dados: [res.dados]})
  //     })
  //   }
  //   if (!tipoPesquisa || tipoPesquisa === "") {
  //     API.get("alunos").then((res) => {
  //       setData(res)
  //     })
  //   }
  // }, [params, pesquisa, tipoPesquisa]);

  return (
    <Fragment>

      <header className="header-table">
        <div className="right-header">

          <Select state={tipoPesquisa} setState={setTipoPesquisa} icon={"expand_more"} placeholder="Semestre">
            <option value="status">1° Semestre de 2023</option>
          </Select>
          
        </div>
        
      </header>

      <ContentTable contentData={data} />

    </Fragment>
  );
}
