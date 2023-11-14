import React from 'react'
import TableContainer from './TableContainer/TableContainer'
import './ConsultaBoletim.css'


function ConsultaBoletim() {

    return (
        <div className="container-main">
            <div className='page-title'>
                <h1 className='title_ BoletimAlunoTitle'>Boletim</h1>
                <p className='subtitle_'>Selecione o semestre para acessar o boletim respectivo</p>
            </div>

            <br />

            <div className="">
                <h2 className='title_'>Aluno</h2>
                <p className='subtitle_'>Victor Cardoso</p>
            </div>

            <TableContainer />
        </div>
    );
};

export default ConsultaBoletim;