import { React } from 'react'
import { useState, useEffect } from 'react'
import { Collapse } from 'reactstrap'
import API from '../../../../services/API'

export default function DisObrigatoria() {
    const [formDis, setFormDis] = useState("")
    const [disciplinas, setDisciplinas] = useState([])

    const [idDis, setIdDis] = useState([])
    const [turmas, setTurmas] = useState([])

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

    useEffect(() => {

        var array = [1, 2, 3, 4]
        var index = array.indexOf(2)
        array.splice(index, 1)
        console.log(array)

        API.get("disciplinas", "tipo=OBRIGATORIA").then((res) => {
            console.log(res.dados)
            setDisciplinas(res.dados)
        })

    }, [])

    useEffect(() => {
        API.get("turmas", `id=${idDis}`).then((res) => {
            console.log(res.dados)
            setTurmas(res.dados)
        })
    }, [idDis])

    const testes = ["Hora 1", "Hora 2", "Hora 3"]

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
                            <tr>{
                                
                            }
                                <th>Prof. Marizilda</th>
                                <th>Prof. Dante</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>{testes.map((hora) => {
                                return (
                                    <p>{hora}</p>
                                )
                            })}</td>
                                <td>{testes.map((hora) => {
                                    return (
                                        <p>{hora}</p>
                                    )
                                })}</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </div>
        // </>

    )
}