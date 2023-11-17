import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContentTable from "./ContentTable/ContentTable";
import API from "../../../../../services/API";
import Select from "../../../../global/Select/Select";

import "./TableContainer.css";

export default function TableContainer({cpf, aluno}) {

  const [data, setData] = useState({ dados: [] })
  const [tipoPesquisa, setTipoPesquisa] = useState("")

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

          <Link to={`/editarBoletim/${aluno.cpf}`} className="link-btn-add-boletim">
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
