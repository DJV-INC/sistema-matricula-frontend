import React, { useEffect, useState } from "react";
import "./EditTurma.css";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import API from "../../../../../services/API";
import { useNavigate } from "react-router-dom";

export default function EditTurma({func, idTurma, idDisciplina}) {

    const navigate = useNavigate();
  	const [data, setData] = useState("");

	useEffect(() => {
		API.get("turmas" , `id=${idDisciplina}`).then(res => {
			for (let i = 0; i < res.dados.length; i++) {
				if (res.dados[i].id === parseInt(idTurma)) {
					setData(res.dados[i])
                    console.log(res.dados[i]);
				}
			}
		})
	}, [navigate]);

	function handleSubmit(event) {
		event.preventDefault();

		const objBody = {
            id: data.id,
            disciplina_id: idDisciplina,
            professor_id: parseInt(event.target[`professor-select-edit`].value),
            diaSemana: event.target[`dia-select-edit`].value,
            horario: event.target[`horario-edit`].value,
            numeroVagas: event.target[`vagas-edit`].value,
        }

        console.log(objBody);

        API.patch("turmas", objBody)

		alert("Turma editada com sucesso");

		func()
	}

    return (
        <div className="modal-editTurma">
            <Row>
                <Col className="field-deleteTurma">
                    <div className="title">
                        Editar Turma
                        <button className="close_ btn" onClick={func}>
                            <span class="material-symbols-rounded">close</span>
                        </button>
                    </div>

                    <Row>
                        <Form method="POST" onSubmit={handleSubmit}>
                            {/* Titulo da pagina */}
                            <h2>Harmonia 1</h2>

                            <hr />

                            {/* Formularios */}

                            <FormGroup>
                                <tr>
                                    <th>Professor</th>
                                    <th>Dia</th>
                                    <th>Horário</th>
                                    <th>Vagas</th>
                                </tr>

                                <TurmaForm {...data} />

                            </FormGroup>

                            <Row>
                                <div className="editTurma-buttons">
                                    <Button onClick={func} className="deleteTurma">
                                        Cancelar
                                    </Button>

                                    <div className="Link-salvarTurma-Salvar">
                                        <button className="Salvar">Salvar</button>
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

function TurmaForm({professor, diaSemana, horario, numeroVagas}) {
    
    
    const [stHorario, setHorario] = useState(horario)
    const [stNumVagas, setNumVagas] = useState(numeroVagas)
    
    useEffect(() => {
        setHorario(horario)
        setNumVagas(numeroVagas)
    }, [horario, numeroVagas]);
    
    function handleHorario(e) {
        setHorario(e.target.value)
    }
    function handleNumVagas(e) {
        setNumVagas(e.target.value)
    }

    const itemList = "edit"
	try {
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
                    <option selected value={professor.id}>{professor.nomeCompleto}</option>
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
                    <option selected >{diaSemana}</option>
                </Input>
                </td>
    
                {/* Horario */}
    
                <td>
                    <Input id="horario" name={`horario-${itemList}`} type="time" value={stHorario} 
                    onChange={handleHorario}/>
                </td>
    
                {/* Vagas */}
    
                <td>
                    <Input id="vagas" name={`vagas-${itemList}`} type="number" value={stNumVagas} onChange={handleNumVagas}/>
                </td>
            </tr>
        );
    } catch (error) {
        
    }
}