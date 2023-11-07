import { Fragment } from "react";
import NavbarFuncionario from "../components/NavbarFuncionario";
import ConsultaDisciplina from "../components/funcionario/ConsultaDisciplina/ConsultaDisciplina";

function FuncionarioDisciplina() {
    return (
        <Fragment>
            <NavbarFuncionario />
            <ConsultaDisciplina/>
        </Fragment>
    );
}

export default FuncionarioDisciplina;