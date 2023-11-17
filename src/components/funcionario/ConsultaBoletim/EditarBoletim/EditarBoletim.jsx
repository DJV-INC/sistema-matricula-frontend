import React, { useEffect, useState } from 'react'
import { Form, Label, Input } from 'reactstrap';

import './EditarBoletim.css'
import API from '../../../../services/API';

function EditarBoletim({close, cpf}) {

    const [boletim, setBoletim] = useState([])
    
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


    useEffect(() => {
        API.get("boletim", `aluno_id=${aluno.id}`).then(    res   =>    {
            setBoletim(res.dados)
        })
    }, []);
    
   function handleSubmit(event) {
    event.preventDefault();

    const dados = []

    for (let i = 0; i < disciplinas.length; i++) {
        dados.push({
            semestre: event.target.semestre.value,
            disciplina: disciplinas[i].nome,
            professor: event.target["professor-" + disciplinas[i].id].value,
            faltas: event.target["faltas-" + disciplinas[i].id].value,
            notaFinal: event.target["nota-" + disciplinas[i].id].value,
            conceito: event.target["conceito-" + disciplinas[i].id].value.toUpperCase(),
        })
    }

    if(dados.length !== 0){
        dados.map(linhaBoletim => {
            API.post("boletim", linhaBoletim, `aluno_id=${aluno.id}`);
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
                        <h1 className='title_ BoletimAlunoTitle'>Adicionar Boletim</h1>
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
                    {disciplinas.map(item => {
                        return(
                            <tr>
                                <td>{item.nome}</td>
                                <td>
                                    <Input required id={"professor-" + item.id} name={"professor-" + item.id} type="select">
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
                                </td>
                                <td>
                                    <Input required id={"faltas-" + item.id} name={"faltas-" + item.id} type="number" min={0}/>
                                </td>
                                <td>
                                    <Input required id={"nota" + item.id} name={"nota-" + item.id} type="number" min={0} max={10}/>
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

export default EditarBoletim;