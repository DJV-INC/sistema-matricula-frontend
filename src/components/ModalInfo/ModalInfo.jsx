import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Table } from 'reactstrap';


function ModalInfo(props) {

    return (

        <div className="modal_aluno">
            <div className="title">Informações do aluno</div>

            <div className="info">
                <div className="info_item">
                    <p className="title_item">Nome</p>
                    <p className="subtitle_item">{props.item.nomeCompleto}</p>
                </div>
                <div className="info_item">
                    <p className="title_item">Status</p>
                    <spam className="subtitle_item status">Matriculado</spam>
                </div>
                <div className="info_item">
                    <p className="title_item">RG</p>
                    <p className="subtitle_item">{props.item.rg}</p>
                </div>
                <div className="info_item">
                    <p className="title_item">CPF</p>
                    <p className="subtitle_item">{props.item.cpf}</p>
                </div>
                <div className="info_item">
                    <p className="title_item">Email</p>
                    <p className="subtitle_item">{props.item.email}</p>
                </div>
                <div className="info_item">
                    <p className="title_item">Data de Nascimento</p>
                    <p className="subtitle_item">00/00/0000</p>
                </div>
                <div className="info_item">
                    <p className="title_item">Telefone</p>
                    <p className="subtitle_item">982942491</p>
                </div>
            </div>

            <div className="title_sec">Matrícula</div>
            <div className="table_matricula">
                <Table striped>
                    <thead>
                        <tr>
                            <th>Disciplina</th>
                            <th>Dia/Hora</th>
                            <th>Professor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Harmonia 1</td>
                            <td>Quinta-feira - 18h</td>
                            <td>Dante</td>
                        </tr>
                        <tr>
                            <td>Flauta 11</td>
                            <td>Sexta-feira - 13h</td>
                            <td>Wilson Rezende</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>

    )
}

export default ModalInfo