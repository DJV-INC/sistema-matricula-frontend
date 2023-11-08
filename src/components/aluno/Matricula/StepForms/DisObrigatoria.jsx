import { React } from 'react'
import { useState, useEffect } from 'react'
import { Collapse } from 'reactstrap'

export default function DisObrigatoria() {
    const [formDis, setFormDis] = useState("")

    function handleDis(event) {
        const botoes = document.getElementsByClassName("btn-dis")
        const botao = event.currentTarget

        for (const element of botoes) {
            element.classList.remove("active")
            element.classList.add("btn-hover")
        }

        
        
        console.log(botao)


        botao.setAttribute("class", botao.className.replace("btn-hover", "active"))

    }


    const disciplinas = ["Harmonia", "Contraponto", "Teoria Musical"]
    const testes = ["Hora 1", "Hora 2", "Hora 3"]
    return (
        // <>
        //     <hr className="breakline"/>
        <div className="form">
            <div className="menu-disciplina">
                {disciplinas.map((disciplina) => {
                    return (
                        <button className="btn-dis btn-hover" onClick={(e) => { handleDis(e) }}>{disciplina}</button>
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
                            <tr>
                                <th>Prof. Marizilda</th>
                                <th>Prof. Dante</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>{testes.map((hora) => {
                                return(
                                    <p>{hora}</p>
                                )
                            })}</td>
                            <td>{testes.map((hora) => {
                                return(
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