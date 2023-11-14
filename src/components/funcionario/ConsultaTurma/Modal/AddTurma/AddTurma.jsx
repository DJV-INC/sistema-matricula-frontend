import React, { useEffect, useState } from "react";
import "./AddTurma.css";
import { Col, Row, Form, FormGroup, Input, Button } from "reactstrap";
import API from "../../../../../services/API";

export default function AddTurma({ closeModal, idDisciplina, nomeDisciplina }) {

	const [listaTurmas, setlistaTurmas] = useState([]);
  	
  	const [professor, setProfessor] = useState("");
	const [diaSemana, setDiaSemana] = useState("");

	useEffect(() => {
		API.get("professores").then(res => {
			setProfessor(res.dados)
		})

		API.get("turmas" , `id=${idDisciplina}`).then(res => {
			for (let i = 0; i < res.dados.length; i++) {
				console.log(res.dados[i].disciplina.id);
				if (res.dados[i].disciplina.id === parseInt(idDisciplina)) {
					setDiaSemana(res.dados[i].diaSemana)
				}
			}
		})
	}, [idDisciplina]);


	function handleAdd() {
		console.log(listaTurmas);
		setlistaTurmas(
			[...listaTurmas, 
				<TurmaForm professorData={professor} diaSemanaData={diaSemana} itemList={listaTurmas.length + 1}/>]
				)
	}

	function handleSubmit(event) {
		event.preventDefault();

		const arrPost = []

		listaTurmas.map((item, i) => {
			i++
			arrPost.push(
				{
					professor: event.target[`professor-select-${i}`].value,
					diaSemana: event.target[`dia-select-${i}`].value,
					horario: event.target[`horario-${i}`].value,
					vagas: event.target[`vagas-${i}`].value,
				}
			)
		})

		console.log(arrPost);

		arrPost.map(item => {
			API.post("turmas", {
				horario: item.horario,
				numeroVagas: item.vagas,
				diaSemana: item.diaSemana,
			} ,`professor_id=${parseInt(item.professor)}&disciplina_id=${idDisciplina}`)
		})

		alert("Turma(s) cadastrada");

		closeModal()
	}


	return (
		<div className="modal-addTurma">
			<Row>
			<Col className="field-addTurma">
				<div className="title">
					Adicionar Turma
					<button className="close_ btn" onClick={closeModal}>
					<span class="material-symbols-rounded">close</span>
					</button>
				</div>

				<Row>
					<hr />
					<h2>{nomeDisciplina}</h2>
					<Form method="POST" onSubmit={handleSubmit}>
					{/* Titulo da pagina */}

					{/* Formularios */}

					<FormGroup className="form-group">
						<tr>
							<th>Professor</th>
							<th>Dia</th>
							<th>Horário</th>
							<th>Vagas</th>
						</tr>

						{listaTurmas.map((item) => {
							return item;
						})}

					</FormGroup>

					<Row>
						<div className="AddTurma-buttons">
							<Button className="addTurma" onClick={handleAdd}>
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

function TurmaForm({professorData, diaSemanaData, itemList}) {
	console.log(itemList);

	return (
		<tr>
			{/* Professor */}

			<td>
			<Input
				className="select"
				id="professor-select"
				name={`professor-select-${itemList}`}
				type="select"
			>
				<option>Selecione</option>
				{
					professorData.map(item => {
						return (
							<option value={item.id}>{item.nomeCompleto}</option>
						)
					})
				}
			</Input>
			</td>

			{/* Dia */}

			<td>
			<Input
				className="select"
				id="dia-select"
				name={`dia-select-${itemList}`}
				type="select"
			>
				<option>Selecione</option>
				<option>Segunda-Feira</option>
				<option>Terça-Feira</option>
				<option>Quarta-Feira</option>
				<option>Quinta-Feira</option>
				<option>Sexta-Feira</option>
			</Input>
			</td>

			{/* Horario */}

			<td>
				<Input id="horario" name={`horario-${itemList}`} type="time" ></Input>
			</td>

			{/* Vagas */}

			<td>
				<Input id="vagas" name={`vagas-${itemList}`} type="number" ></Input>
			</td>
		</tr>
	);
}
