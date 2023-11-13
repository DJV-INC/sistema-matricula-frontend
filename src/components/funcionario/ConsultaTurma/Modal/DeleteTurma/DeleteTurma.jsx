import React, { useEffect, useState } from "react";
import "./DeleteTurma.css";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import API from "../../../../../services/API";

export default function DeleteTurma({closeModal, nomeDisciplina}) {
    const {idDisciplina} = useParams()
    const [data, setData] = useState([])
    const selectedRows = []

    useEffect(() => {
        if (idDisciplina) {
           API.get("turmas", `id=${idDisciplina}`).then(res => {
              setData(res.dados)
           }).catch((e) => {
              alert(e)
           })
        }
      }, [idDisciplina])

    function handleDeleteItems(e) {
        e.preventDefault()

        selectedRows.map(item => {
            console.log(item[0].slice(-1), item[1]);
            const id = item[0].slice(-1)
            if (item[1]) {
                console.log(Number.parseInt(id))
                API.del("turmas", id)
            }
        })

        alert("As turmas selecionadas foram excluídas com sucesso")

        closeModal()
    }

    return (
        <div className="modal-deleteTurma">
            <Row>
                <Col className="field-deleteTurma">
                    <div className="title">
                        Excluir Turma
                        <button className="close_ btn" onClick={closeModal}>
                            <span class="material-symbols-rounded">close</span>
                        </button>
                    </div>

                    <Row>
                        <Form method="POST" onSubmit={handleDeleteItems}>
                            {/* Titulo da pagina */}
                            <h2>{nomeDisciplina}</h2>

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

                            <table className="table-delete-turma">
                                <thead>
                                <tr className="tr_">
                                    <th>Seleção</th>
                                    <th>Professor</th>
                                    <th>Dia</th>
                                    <th>Horário</th>
                                    <th>Vagas</th>
                                </tr>
                                </thead>
                                <tbody className="item-turma-table">
                                {
                                    data.map(item => {
                                        return(
                                            <TableItems 
                                                data={item} 
                                                selectedRows={selectedRows}
                                            />
                                        )
                                    })
                                }
                                </tbody>
                            </table>

                            <Row>
                                <div className="btn-turma-delete-container">
                                    <button onClick={closeModal} className="deleteTurma delete-btn">Cancelar
                                    </button>
                                    <button className="excluir delete-btn">Excluir Turmas</button>
                                </div>
                            </Row>
                        </Form>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

function TableItems({ allSelected = false, data, selectedRows }) {
    const [checked, setChecked] = useState(allSelected)

    function handleRowSelect(e) {
        let verificador = {
            existe: false,
            linha: null
        }

        selectedRows.map((item, index) => {
            if (item[0] === e.target.id) {
                verificador.existe = true
                if(item[1] !== e.target.checked){
                    verificador.linha = index
                } 
            }
        })
        
        if (verificador.existe) {
            if (verificador.linha !== null) {
                selectedRows[verificador.linha][1] = e.target.checked
            }
        } else {
            selectedRows.push([e.target.id, e.target.checked])
        }
        
        console.log(selectedRows);
        setChecked(e.target.checked)
    }
    
    return (
        <tr>
            <td>
                <input type="checkbox" onChange={handleRowSelect} id={"checkbox-id-"+data.id} checked={checked}/>
            </td>
            <td>{data.professor.nomeCompleto}</td>
            <td>{data.diaSemana}</td>
            <td>{data.horario}</td>
            <td>{data.numeroAlunos}/{data.numeroVagas}</td>
        </tr>
    )
}