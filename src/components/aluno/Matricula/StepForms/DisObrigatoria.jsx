import { React } from 'react'
import { useState, useEffect } from 'react'
import { Collapse } from 'reactstrap'
import API from '../../../../services/API'

export default function DisObrigatoria() {
    const [formDis, setFormDis] = useState("")
    const [disciplinas, setDisciplinas] = useState([])

    const [idDis, setIdDis] = useState([])
    const [turmas, setTurmas] = useState([])
    const [aux, setAux] = useState([])


    let nomes = [0, 1, 2, 3, 4]

    function handleDis(event, id) {
        const botoes = document.getElementsByClassName("btn-dis")
        const botao = event.currentTarget

        for (const element of botoes) {
            element.classList.remove("active")
            element.classList.add("btn-hover")
        }

        console.log(botao)
        botao.setAttribute("class", botao.className.replace("btn-hover", "active"))

        //Setando id da disciplina para fetch das turmas no useEffect
        setIdDis(id)
    }

    function cutOff(index) {
        turmas.splice(index, 1)
    }

    useEffect(() => {

        API.get("disciplinas", "tipo=OBRIGATORIA").then((res) => {
            console.log(res.dados)
            setDisciplinas(res.dados)
        })

    }, [])

    useEffect(() => {
        API.get("turmas", `id=${idDis}`).then((res) => {
            console.log(res.dados)
            setTurmas(res.dados)
            setAux(res.dados)
        })
    }, [idDis])

    const testes = {
        0: { "nome": "Jackeline" },
        1: { "nome": "Victor" }
    }


    return (
        // <>
        //     <hr className="breakline"/>
        <div className="form">
            <div className="menu-disciplina">
                {disciplinas.map((disciplina) => {
                    return (
                        <button className="btn-dis btn-hover" value={disciplina.id} onClick={(e) => { handleDis(e, e.target.value) }}>{disciplina.nome}</button>
                    )
                })}
            </div>
            <div className="form-disciplina">
                {/* <p>Selecione uma matéria para iniciar a matrícula</p> */}
                <p className="subtitle_">Harmonia</p>
                <section className="section-hr">
                    <h1 className="title-hr">Harmonia 1</h1>
                    <p className="subtitle-hr">Selecione o horário</p>

                    <table>
                        <thead>
                            <th>A</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {
                                        turmas.map((turma) => {
                                            let prof = turma.professor.nomeCompleto

                                            turmas.map((item, index) => {
                                                let nProf = item.professor.nomeCompleto
                                                if (nProf === prof) {
                                                    console.log(prof)
                                                    cutOff(index)
                                                }
                                            })

                                            aux.push(turma)
                                        })
                                    }
                                    {
                                        aux.map((item) => {
                                            console.log(turmas)
                                            return (
                                                <h1>{item.professor.nomeCompleto}</h1>
                                            )
                                        })
                                    }
                                </td>
            //Esse trampo de cima foi pro thead -- para os TDs vou usar a reposta original só pra pegar
            //os horários
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </div>
        // </>

    )
}