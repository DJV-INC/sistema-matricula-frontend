import React, { useState } from "react";
import "./DeleteTurma.css";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

export default function DeleteTurma() {
    return (
        <div className="modal-deleteTurma">
            <Row>
                <Col className="field-deleteTurma">
                    <div className="title">
                        Excluir Turma
                        <button className="close_ btn">
                            <span class="material-symbols-rounded">close</span>
                        </button>
                    </div>

                    <Row>
                        <Form method="POST">
                            {/* Titulo da pagina */}
                            <h2>Harmonia 1</h2>

                            <hr />

                            {/* Formularios */}

                            <FormGroup check className="Seleciona-Tudo">
                                <div>
                                    <Input type="checkbox" />
                                    {' '}
                                    <Label check>
                                        Selecionar Tudo
                                    </Label>
                                </div>

                                <p>Selecionados</p>
                            </FormGroup>

                            <FormGroup>
                                <tr>
                                    <th>Professor</th>
                                    <th>Dia</th>
                                    <th>Horário</th>
                                    <th>Vagas</th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>

                            </FormGroup>

                            <Row>
                                <div className="deleteTurma-buttons">
                                    <Button className="deleteTurma">
                                        Cancelar
                                    </Button>

                                    <div className="Link-deleteTurma-Salvar">
                                        <button className="Excluir">Excluir Turmas</button>
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