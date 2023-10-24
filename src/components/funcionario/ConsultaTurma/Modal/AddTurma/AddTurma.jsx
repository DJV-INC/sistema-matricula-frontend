import React from "react";
import "./AddTurma.css"
import { Col, Label, Row, Form, FormGroup, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";

export default function AddTurma() {

    return (
        <div className="modal">
            <div className="modal-addTurma">
                <Row>
                    <Col className="field-addTurma">
                        <div className="title">Adicionar Turma
                            <button className="close_ btn">
                                <span class="material-symbols-rounded">close</span>
                            </button>
                        </div>

                        <Row>
                            <Form method='POST'>

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

                                    <tr>

                                        {/* Professor */}

                                        <td>
                                            <Input
                                                className="select"
                                                id="professor-select"
                                                name="professor-select"
                                                type="select"
                                            >
                                                <option>
                                                    Selecione
                                                </option>
                                                <option>
                                                    Aida Machado
                                                </option>
                                                <option>
                                                    Wilson Rezende
                                                </option>
                                                <option>
                                                    Dante
                                                </option>
                                                <option>
                                                    Mauro Domenech
                                                </option>
                                            </Input>
                                        </td>

                                        {/* Dia */}

                                        <td>
                                            <Input
                                                className="select"
                                                id="dia-select"
                                                name="dia-select"
                                                type="select"
                                            >
                                                <option>
                                                    Selecione
                                                </option>
                                                <option>
                                                    Semana
                                                </option>
                                                <option>
                                                    Final de Semana
                                                </option>
                                                <option>
                                                    Feriados
                                                </option>
                                            </Input>
                                        </td>

                                        {/* Horario */}


                                        <td>
                                            <Input
                                                id="horario"
                                                name="horario"
                                                type="time"
                                            >
                                            </Input>
                                        </td>

                                        {/* Vagas */}

                                        <td>
                                            <Input
                                                id="vagas"
                                                name="horario"
                                                type="number"
                                            >
                                            </Input>
                                        </td>
                                    </tr>
                                </FormGroup>
                            </Form>
                        </Row>

                        <Row >

                            <div className="AddTurma-buttons">

                                <Button className='addTurma'>
                                    <span class="material-symbols-rounded">add</span>Adicionar
                                </Button>

                                <Link to={"/disciplina"} className='Link-addTurma-Salvar'>
                                    <button className="Confirm">
                                        Salvar
                                    </button>
                                </Link>

                            </div>


                        </Row>

                    </Col>
                </Row>
            </div>
        </div>

    );
}