import {Route, Routes} from "react-router-dom"
import React from "react";

import FuncionarioAluno from "./pages/FuncionarioAluno";
import FuncionarioDisciplina from "./pages/FuncionarioDisciplina";
import FuncionarioProfessor from "./pages/FuncionarioProfessor";
import DeleteTurma from "./components/funcionario/ConsultaTurma/Modal/DeleteTurma/DeleteTurma";

export default function Router() {
  	return (
		<Routes>
			<Route exact path="/" element={<FuncionarioAluno/>}/>
				<Route exact path="/:modalType/:id" element={<FuncionarioAluno/>}/>
				<Route exact path="/:modalType" element={<FuncionarioAluno/>}/>

			<Route exact path="/disciplina" element={<FuncionarioDisciplina/>}/>
				<Route exact path="/disciplina/:modalType/:id" element={<FuncionarioDisciplina/>}/>
				<Route exact path="/disciplina/:modalType" element={<FuncionarioDisciplina/>}/>	
					<Route exact path="/disciplina/turma/:modalType/:id" element={<FuncionarioDisciplina/>}/>
					<Route exact path="/disciplina/turma/:modalType" element={<FuncionarioDisciplina/>}/>
					<Route exact path="/disciplina/turma/delete" element={<DeleteTurma/>}/>
			<Route exact path="/professor" element={<FuncionarioProfessor/>}/>
			<Route exact path="/professor/:modalType" element={<FuncionarioProfessor/>}/>
		</Routes>
  	);
}
