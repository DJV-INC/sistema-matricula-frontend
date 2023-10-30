import React, { useState } from "react";
import "./EditTurma.css";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

export default function EditTurma() {
    return (
        <div className="modal-editTurma">
            <Row>
                <Col className="field-deleteTurma">
                    <div className="title">
                        Editar Turma
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
                                <div className="editTurma-buttons">
                                    <Button className="deleteTurma">
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