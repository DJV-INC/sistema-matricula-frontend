import {Route, Routes} from "react-router-dom"
import React from "react";

import FuncionarioAluno from "./pages/FuncionarioAluno";
import DeleteAluno from "./components/funcionario/ConsultaAluno/Modal/DeleteAluno";
import FuncionarioDisciplina from "./pages/FuncionarioDisciplina";


export default function Router() {
  	return (
		<Routes>
			<Route exact path="/" element={<FuncionarioAluno/>}/>
			<Route exact path="/:modalType/:id" element={<FuncionarioAluno/>}/>
			<Route exact path="/:modalType" element={<FuncionarioAluno/>}/>
			<Route exact path="/deletealuno" element={<DeleteAluno/>}/>
			<Route exact path="/disciplina" element={<FuncionarioDisciplina/>}/>
		</Routes>
  	);
}
