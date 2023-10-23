import { Fragment } from "react";
import HeaderNavbar from "../components/HeaderNavbar";
import ConsultaDisciplina from "../components/funcionario/ConsultaDisciplina/ConsultaDisciplina";

function FuncionarioDisciplina() {
    return (
        <Fragment>
            <HeaderNavbar />
            <ConsultaDisciplina/>
        </Fragment>
    );
}

export default FuncionarioDisciplina;