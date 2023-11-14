import React, { useEffect, useState } from "react";
import "./EditTurma.css";
import { Button, Col, Form, FormGroup, Input, Row } from "reactstrap";
import API from "../../../../../services/API";
import { useNavigate } from "react-router-dom";

export default function EditTurma({closeModal, idTurma, idDisciplina, nomeDisciplina}) {

    const navigate = useNavigate();
  	const [dataTurma, setDataTurma] = useState([]);
  	const [dataProf, setDataProf] = useState([]);

	useEffect(() => {
        API.get("professores").then(res => {
            setDataProf(res.dados)
        })

		API.get("turmas" , `id=${idDisciplina}`).then(res => {
			for (let i = 0; i < res.dados.length; i++) {
				if (res.dados[i].id === parseInt(idTurma)) {
					setDataTurma(res.dados[i])
				}
			}
		})
	}, [navigate, idDisciplina, closeModal, idTurma]);

	function handleSubmit(event) {
		event.preventDefault();

        API.get("professores", `id=${event.target["professor-select-edit"].value}`).then((res) => {
            try {
                const objBody = {
                    id: dataTurma.id,
                    professor: res.dados,
                    diaSemana: event.target[`dia-select-edit`].value,
                    horario: event.target[`horario-edit`].value,
                    numeroVagas: event.target[`vagas-edit`].value,
                }

                console.log(objBody);

                API.patch("turmas", objBody)

                alert("Turma editada com sucesso");

            } catch (error) {
                alert(error)
            }
        })

		closeModal()
	}

    return (
        <div className="modal-editTurma">
            <Row>
                <Col className="field-deleteTurma">
                    <div className="title">
                        Editar Turma
                        <button className="close_ btn" onClick={closeModal}>
                            <span class="material-symbols-rounded">close</span>
                        </button>
                    </div>

                    <Row>
                        <Form method="POST" onSubmit={handleSubmit}>
                            {/* Titulo da pagina */}
                            <h2>{nomeDisciplina}</h2>

                            <hr />

                            {/* Formularios */}

                            <FormGroup>
                                <tr>
                                    <th>Professor</th>
                                    <th>Dia</th>
                                    <th>Horário</th>
                                    <th>Vagas</th>
                                </tr>

                                <TurmaForm {...dataTurma} professores={dataProf}/>

                            </FormGroup>

                            <Row>
                                <div className="editTurma-buttons">
                                    <Button onClick={closeModal} className="deleteTurma">
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

function TurmaForm({professores, horario, numeroVagas}) {
    
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
                    {
					professores.map(item => {
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