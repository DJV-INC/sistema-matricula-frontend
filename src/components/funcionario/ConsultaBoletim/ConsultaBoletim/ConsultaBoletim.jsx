import React, { useEffect, useState } from 'react'
import TableContainer from './TableContainer/TableContainer'
import './ConsultaBoletim.css'
import API from '../../../../services/API'


function ConsultaBoletim({close, cpf}) {

    const [aluno, setAluno] = useState([])

    useEffect(() => {
        API.get("alunos", `cpf=${cpf}`).then(    res   =>    {
            setAluno(res.dados)
        })
    }, [cpf]);

    return (
        <div className="modal-boletim">
            <div className="container-boletim">
                <div className='boletim-modal-title'>
                    <div>
                        <h1 className='title_ BoletimAlunoTitle'>Boletim</h1>
                        <p className='subtitle_'>Selecione o semestre para acessar o boletim respectivo</p>
                    </div>
                    <button className="close_ btn" onClick={close}>
                        <span class="material-symbols-rounded">close</span>
                    </button>
                </div>

                <br />

                <div className="">
                    <h2 className='title_'>Aluno</h2>
                    <p className='subtitle_'>{aluno.nomeCompleto}</p>
                </div>

                <TableContainer aluno={aluno} cpf={cpf}/>
            </div>

        </div>
    );
};

export default ConsultaBoletim;