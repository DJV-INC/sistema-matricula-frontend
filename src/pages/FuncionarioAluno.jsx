import { Fragment } from "react";
import NavbarFuncionario from "../components/NavbarFuncionario";
import ConsultaAluno from "../components/funcionario/ConsultaAluno/ConsultaAluno";

function FuncionarioAluno() {
  return (
    <Fragment>
      <NavbarFuncionario />
      <ConsultaAluno />
    </Fragment>
  );
}

export default FuncionarioAluno;
