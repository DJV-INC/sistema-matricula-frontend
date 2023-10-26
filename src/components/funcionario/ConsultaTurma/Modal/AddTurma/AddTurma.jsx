import React, { useState } from "react";
import "./AddTurma.css";
import { Col, Label, Row, Form, FormGroup, Input, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

export default function AddTurma({ func }) {
  	const [professor, setProfessor] = useState("");
	const [diaSemana, setDiaSemana] = useState("");
	const [horario, setHorario] = useState("");
	const [vagas, setVagas] = useState("");

	const [addForm, setAddForm] = useState([]);

  	const arrForms = [
		<TurmaForm />, 
		<TurmaForm />
	];

  	const navigate = useNavigate();

	function handleSubmit(event) {
		event.preventDefault();

		arrForms.map(item => {
			addForm.push(item.setAddForm())
		})

		console.log(addForm);

		const dados = {
			professor: event.target["professor-select"].value,
			diaSemana: event.target["dia-select"].value,
			horario: event.target["horario"].value,
			vagas: event.target["vagas"].value,
		};

		

		console.log(dados);

		alert("Turma cadastrada");

		navigate(-1);
	}

	return (
		<div className="modal-addTurma">
			<Row>
			<Col className="field-addTurma">
				<div className="title">
					Adicionar Turma
					<button className="close_ btn" onClick={func}>
					<span class="material-symbols-rounded">close</span>
					</button>
				</div>

				<Row>
					<Form method="POST" onSubmit={handleSubmit}>
					{/* Titulo da pagina */}

					<hr />
					<h2>Harmonia 1</h2>

					{/* Formularios */}

					<FormGroup>
						<tr>
							<th>Professor</th>
							<th>Dia</th>
							<th>Horário</th>
							<th>Vagas</th>
						</tr>

						{arrForms.map((item) => {
							return item;
						})}
					</FormGroup>

					<Row>
						<div className="AddTurma-buttons">
							<Button className="addTurma">
							<span class="material-symbols-rounded">add</span>Adicionar
							</Button>

							<div className="Link-addTurma-Salvar">
							<button className="Confirm">Salvar</button>
							</div>
						</div>
					</Row>
					</Form>
				</Row>
			</Col>
			</Row>
		</div>
	);
}

function TurmaForm({addForm}) {

	const [professor, setProfessor] = useState("");
  	const [diaSemana, setDiaSemana] = useState("");
  	const [horario, setHorario] = useState("");
  	const [vagas, setVagas] = useState("");

	const arr = {
		professor,
		diaSemana,
		horario,
		vagas
	}


	console.log(arr);

	return (
		<tr>
			{/* Professor */}

			<td>
			<Input
				className="select"
				id="professor-select"
				name="professor-select"
				type="select"

				onChange={(e) => setProfessor(e.target.value)}
			>
				<option>Selecione</option>
				<option>Aida Machado</option>
				<option>Wilson Rezende</option>
				<option>Dante</option>
				<option>Mauro Domenech</option>
			</Input>
			</td>

			{/* Dia */}

			<td>
			<Input
				className="select"
				id="dia-select"
				name="dia-select"
				type="select"
				onChange={(e) => setDiaSemana(e.target.value)}
			>
				<option>Selecione</option>
				<option>Semana</option>
				<option>Final de Semana</option>
				<option>Feriados</option>
			</Input>
			</td>

			{/* Horario */}

			<td>
			<Input id="horario" name="horario" type="time" onChange={(e) => setHorario(e.target.value)}></Input>
			</td>

			{/* Vagas */}

			<td>
			<Input id="vagas" name="vagas" type="number" onChange={(e) => setVagas(e.target.value)}></Input>
			</td>
		</tr>
	);
}
