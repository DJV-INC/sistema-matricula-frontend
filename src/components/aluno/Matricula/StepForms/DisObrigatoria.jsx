import { React } from 'react'
import { useState, useEffect } from 'react'

export default function DisObrigatoria() {
    const [formDis, setFormDis] = useState("")


    const disciplinas = ["Harmonia", "Contraponto", "Teoria Musical"]

    return (
        <div className="form">

            <div className="menu-disciplina">
                {disciplinas.map((disciplina) => {
                    return (
                        <button className="btn-dis">{disciplina}</button>
                    )
                })}
            </div>
            <div className="form-disciplina">
                <p>Selecione uma matéria para iniciar a matrícula</p>
            </div>
        </div>
    )
}