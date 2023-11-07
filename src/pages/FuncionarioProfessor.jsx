import { Fragment } from "react";
import NavbarFuncionario from "../components/NavbarFuncionario";
import ConsultaProfessor from "../components/funcionario/ConsultaProfessor/ConsultaProfessor";


function FuncionarioProfessor() {
    return (
        <Fragment>
            <NavbarFuncionario />
            <ConsultaProfessor />
        </Fragment>

    )
}

export default FuncionarioProfessor;