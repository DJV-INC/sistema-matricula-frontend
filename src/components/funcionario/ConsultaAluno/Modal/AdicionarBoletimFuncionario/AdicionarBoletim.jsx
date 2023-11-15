import React from 'react'
import TableContainer from './TableContainer/TableContainer'
import { Row, Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';

import './AdicionarBoletim.css'


function AdicionarBoletim({close}) {

    return (
        <div className="modal-boletim">
            <div className="container-boletim">
                <div className='page-title'>
                    <div>
                        <h1 className='title_ BoletimAlunoTitle'>Adicionar Boletim</h1>
                        <p className='subtitle_'>Selecione o semestre para acessar o boletim respectivo</p>
                    </div>
                    <button className="close_ btn" onClick={close}>
                        <span class="material-symbols-rounded">close</span>
                    </button>
                </div>

                <div className="ItemAlunoBoletim">
                    <Label>Aluno</Label>
                    <h2 className='title_'>Victor Cardoso</h2>
                </div>

                <div className='Form-Boletim'>

                    <Row>
                        <Form>

                            <div className='Form-Boletim-part1'>

                                <FormGroup className='Input-boletim'>

                                    <Label for="Semestre">
                                        Semestre
                                    </Label>

                                    <Input
                                        id="Semestre"
                                        name="semestre"
                                        type="select"
                                    >
                                        <option>
                                            Selecionar
                                        </option>
                                        <option>
                                            1° semestre 2023
                                        </option>
                                        <option>
                                            2° semestre 2023
                                        </option>
                                    </Input>
                                </FormGroup>

                                <FormGroup className='Input-boletim'>

                                    <Label for="Disciplina">
                                        Disciplina
                                    </Label>

                                    <Input
                                        id="Disciplina"
                                        name="Disciplina"
                                        type="select"

                                    >
                                        <option>
                                            Selecionar
                                        </option>
                                        <option>
                                            Harmonia
                                        </option>
                                        <option>
                                            Instrumento
                                        </option>
                                    </Input>
                                </FormGroup>
                            </div>

                            <div className='Form-Boletim-part2'>
                                <FormGroup className='Input-boletim'>
                                    <Label for="Faltas">
                                        Faltas
                                    </Label>

                                    <Input
                                        id="Faltas"
                                        name="Faltas"
                                        type="number"

                                    >


                                    </Input>
                                </FormGroup>
                                <FormGroup className='Input-boletim'>
                                    <Label for="Nota">
                                        Notas
                                    </Label>

                                    <Input
                                        id="Nota"
                                        name="Nota"
                                        type="number"

                                    >


                                    </Input>
                                </FormGroup>

                                <FormGroup className='Input-boletim'>
                                    <Label for="Conceito">
                                        Conceito
                                    </Label>

                                    <Input
                                        id="Conceito"
                                        name="Conceito"
                                        type="select"

                                    >
                                        <option>
                                            Selecionar
                                        </option>
                                        <option>
                                            Aprovado
                                        </option>
                                        <option>
                                            Reprovado
                                        </option>
                                    </Input>
                                </FormGroup>
                            </div>

                            <div>
                                <div className='botoes-div-addaluno'>
    
                                    <Button onClick={close} className='Cancel btn'>
                                        Cancelar
                                    </Button>

                                    <Button className='Confirm'>
                                        Adicionar
                                    </Button>

                                </div>
                            </div>

                        </Form>
                    </Row>

                </div>

            </div>
        </div>
    );
};

export default AdicionarBoletim;