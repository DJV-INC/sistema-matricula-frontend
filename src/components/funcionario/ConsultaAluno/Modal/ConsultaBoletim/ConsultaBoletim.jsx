import React, { useState } from 'react'
import TableContainer from './TableContainer/TableContainer'
import './ConsultaBoletim.css'


function ConsultaBoletim({close, cpf}) {

    const [addState, setAddState] = useState(false)
    return (
        <div className="modal-boletim">
            <div className="container-boletim">
                <div className='page-title'>
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
                    <p className='subtitle_'>Victor Cardoso</p>
                </div>

                <TableContainer cpf={cpf}/>
            </div>

        </div>
    );
};

export default ConsultaBoletim;