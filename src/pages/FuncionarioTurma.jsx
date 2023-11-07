import { Fragment } from "react";
import NavbarFuncionario from "../components/NavbarFuncionario";
import ConsultaTurma from "../components/funcionario/ConsultaTurma/ConsultaTurma";

function FuncionarioTurma(){
    return(
        <Fragment>
            <NavbarFuncionario/>
            <ConsultaTurma/>
        </Fragment>
    );
    
}

export default FuncionarioTurma;