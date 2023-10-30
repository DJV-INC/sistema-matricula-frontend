import { Fragment } from "react";
import HeaderNavbar from "../components/HeaderNavbar";
import ConsultaProfessor from "../components/funcionario/ConsultaProfessor/ConsultaProfessor";


function FuncionarioProfessor() {
    return (
        <Fragment>
            <HeaderNavbar />
            <ConsultaProfessor />
        </Fragment>

    )
}

export default FuncionarioProfessor;