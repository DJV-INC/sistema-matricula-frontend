import React, { Fragment, useEffect, useState } from 'react'
import { Form, Label, Input } from 'reactstrap';

import './EditarBoletim.css'
import API from '../../../../services/API';

export default function EditarBoletim({close, cpf}) {
    const [aluno, setAluno] = useState([])
    const [professores, setProfessores] = useState([])
    const [disciplinas, setDisciplinas] = useState([])
    const [boletim, setBoletim] = useState([])
    
    useEffect(() => {
        API.get("alunos", `cpf=${cpf}`).then(    res   =>    {
            setAluno(res.dados)
            console.log(res.dados);
        })
        API.get("disciplinas").then(    res   =>    {
            setDisciplinas(res.dados)
        })
        API.get("professores").then(    res   =>    {
            setProfessores(res.dados)
        })
    }, [cpf]);

    useEffect(() => {
        API.get("boletim", `aluno_id=${aluno.id}`).then(    res   =>    {
            if (Array.isArray(res.dados)) {
                setBoletim(res.dados)
            }
        })
    }, [aluno.id]);
    
    function handleSubmit(event) {
        event.preventDefault();

        
        const dados = []
        
        for (let i = 0; i < boletim.length; i++) {
            dados.push({
                id: boletim[i].id,
                semestre: event.target.semestre.value,
                disciplina: boletim[i].disciplina,
                professor: event.target["professor-" + boletim[i].id].value,
                faltas: event.target["faltas-" + boletim[i].id].value,
                notaFinal: event.target["nota-" + boletim[i].id].value,
                conceito: event.target["conceito-" + boletim[i].id].value.toUpperCase(),
            })
        }

        if(dados.length !== 0){
            dados.map(linhaBoletim => {
                console.log(linhaBoletim);
                API.patch("boletim", linhaBoletim, `aluno_id=${aluno.id}`);
            })
            alert("Novo boletim cadastrado para " + aluno.nomeCompleto);
            close()
        } else {
            alert("Não há dados para cadastrar")
            close()
        }
    }

    return (
        <div className="modal-boletim">
            <div className="container-boletim">
                <div className='boletim-modal-title'>
                    <div>
                        <h1 className='title_ BoletimAlunoTitle'>Editar Boletim</h1>
                        <p className='subtitle_'>Selecione o semestre e insira as respectivas informações para cada disciplina</p>
                    </div>
                    <button className="close_ btn" onClick={close}>
                        <span class="material-symbols-rounded">close</span>
                    </button>
                </div>

                <div className="ItemAlunoBoletim">
                    <Label>Aluno</Label>
                    <h2 className='title_'>{aluno.nomeCompleto}</h2>
                </div>

            <Form method="POST" onSubmit={handleSubmit} className='Form-boletim'>
                <div className="semestre-container">
                    <Label>Semestre</Label>
                    <Input required id="semestre" name="semestre" type="select">
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
                </div>
                <table className="table_">
                    <thead>
                        <tr className="tr_">
                            <th>Disciplina</th>
                            <th>Professor</th>
                            <th>Faltas</th>
                            <th>Nota</th>
                            <th>Conceito</th>
                        </tr>
                    </thead>
                    <tbody>
                    {boletim.map(item => {
                        return(
                            <TrBoletim item={item} professores={professores}/>
                        )
                    })}
                    </tbody>
                    </table>
                    <br />

                    <div className='add-boletim-button-container'>
                        <button onClick={close} className='adicionar-boletim'>Cancelar</button>    
                        <button className='confirm-btn adicionar-boletim'>Confirmar</button>    
                    </div>
                </Form>
               
            </div>
        </div>
    );
};

function TrBoletim({item, professores, disciplina}){
    const [faltas, setFaltas] = useState(item.faltas)
    const [notas, setNotas] = useState(item.notaFinal)

    console.log(notas);

    return(
        <tr>
            <td>{item.disciplina}</td>
            <td>
                <Input required id={"professor-" + item.id} name={"professor-" + item.id} type="select">
                    <option>
                        Selecionar
                    </option>
                    { professores.map(prof => {
                        let selectedProf = ""
                        if (prof.nomeCompleto === item.professor) {
                            selectedProf = (
                                <option selected value={prof.id
                                }>
                                    {prof.nomeCompleto}
                                </option>
                            )
                        }
                        return (
                            <Fragment>
                                <option value={prof.nomeCompleto}>
                                        {prof.nomeCompleto}
                                </option>
                                {selectedProf}
                            </Fragment>
                        
                        )
                    })}
                </Input>
            </td>
            <td>
                <Input required onChange={(e) => {setFaltas(e.target.value)}} id={"faltas-" + item.id} name={"faltas-" + item.id} type="number" min={0} value={faltas}/>
            </td>
            <td>
                <Input required onChange={(e) => {setNotas(e.target.value)}} id={"nota" + item.id} name={"nota-" + item.id} type="number" min={0} max={10} value={notas}/>
            </td>
            <td>
                <Input required id={"conceito" + item.id} name={"conceito-" + item.id} type="select">
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
            </td>
        </tr>
    )
}