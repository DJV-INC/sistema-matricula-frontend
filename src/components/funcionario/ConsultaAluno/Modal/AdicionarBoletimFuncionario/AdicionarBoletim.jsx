import React, { useEffect, useState } from 'react'
import { Row, Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';

import './AdicionarBoletim.css'
import API from '../../../../../services/API';

function AdicionarBoletim({close, cpf}) {
    const [aluno, setAluno] = useState([])
    const [professores, setProfessores] = useState([])
    const [disciplinas, setDisciplinas] = useState([])

    useEffect(() => {
        API.get("alunos", `cpf=${cpf}`).then(    res   =>    {
            setAluno(res.dados)
        })
        API.get("disciplinas").then(    res   =>    {
            setDisciplinas(res.dados)
        })
        API.get("professores").then(    res   =>    {
            setProfessores(res.dados)
        })
    }, []);


    function handleSubmit(event) {
        event.preventDefault();

        // let professorObj = {}
        // let disciplinaObj = {}

        // for (let i = 0; i < disciplinas.length; i++) {
        //     console.log(disciplinas[i].id, parseInt(event.target.disciplina.value));
        //     if(disciplinas[i].id === parseInt(event.target.disciplina.value)){
        //         disciplinaObj = disciplinas[i]
        //     }
        // }
     
        const dados = {
            semestre: event.target.semestre.value,
            disciplina: event.target.disciplina.value,
            professor: event.target.professor.value,
            faltas: event.target.faltas.value,
            notaFinal: event.target.nota.value,
            conceito: event.target.conceito.value.toUpperCase()
        };

        console.log(dados);
     
        API.post("boletim", dados, `aluno_id=${aluno.id}`);
     
        alert("Disciplina cadastrada");
     
    }
    

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
                    <h2 className='title_'>{aluno.nomeCompleto}</h2>
                </div>

                <div className='Form-Boletim'>

                    <Row>
                        <Form onSubmit={handleSubmit}>

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
                                            1 semestre 2023
                                        </option>
                                        <option>
                                            2 semestre 2023
                                        </option>
                                    </Input>
                                </FormGroup>

                                <FormGroup className='Input-boletim'>

                                    <Label for="professor">
                                        Professor
                                    </Label>

                                    <Input
                                        id="professor"
                                        name="professor"
                                        type="select"
                                    >
                                        <option>
                                            Selecionar
                                        </option>
                                        { professores.map(item => {
                                            return (
                                                <option value={item.nomeCompleto}>
                                                    {item.nomeCompleto}
                                                </option>
                                            )
                                        })}
                                        
                                    </Input>
                                </FormGroup>

                                <FormGroup className='Input-boletim'>

                                    <Label for="Disciplina">
                                        Disciplina
                                    </Label>

                                    <Input
                                        id="disciplina"
                                        name="disciplina"
                                        type="select"

                                    >
                                        <option>
                                            Selecionar
                                        </option>
                                        { disciplinas.map(item => {
                                            return (
                                                <option value={item.nome}>
                                                    {item.nome}
                                                </option>
                                            )
                                        })}
                                    </Input>
                                </FormGroup>
                            </div>

                            <div className='Form-Boletim-part2'>
                                <FormGroup className='Input-boletim'>
                                    <Label for="faltas">
                                        Faltas
                                    </Label>

                                    <Input
                                        id="faltas"
                                        name="faltas"
                                        type="number"
                                        min={0}
                                    >

                                    </Input>
                                </FormGroup>
                                <FormGroup className='Input-boletim'>
                                    <Label for="Nota">
                                        Notas
                                    </Label>

                                    <Input
                                        id="nota"
                                        name="nota"
                                        type="number"
                                        min={0}
                                        max={10}
                                    >


                                    </Input>
                                </FormGroup>

                                <FormGroup className='Input-boletim'>
                                    <Label for="Conceito">
                                        Conceito
                                    </Label>

                                    <Input
                                        id="conceito"
                                        name="conceito"
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