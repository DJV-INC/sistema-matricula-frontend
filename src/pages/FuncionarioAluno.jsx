import { Fragment } from "react";
import HeaderNavbar from "../components/HeaderNavbar";
import ConsultaAluno from "../components/funcionario/ConsultaAluno";

function FuncionarioAluno() {
  return (
    <Fragment>
      <HeaderNavbar />
      <ConsultaAluno />
    </Fragment>
  );
}

export default FuncionarioAluno;
