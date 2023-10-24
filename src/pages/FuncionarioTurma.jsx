import { Fragment } from "react";
import HeaderNavbar from "../components/HeaderNavbar";
import ConsultaTurma from "../components/funcionario/ConsultaTurma/ConsultaTurma";

function FuncionarioTurma(){
    return(
        <Fragment>
            <HeaderNavbar/>
            <ConsultaTurma/>
        </Fragment>
    );
}

export default FuncionarioTurma;