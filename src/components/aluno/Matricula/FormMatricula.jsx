import React from 'react'
import { useState, useEffect } from 'react'
import DisObrigatoria from './StepForms/DisObrigatoria'
import DisOptativa from './StepForms/DisOptativa'
import FinalForm from './StepForms/FinalForm'
import StepButton from './StepButton/StepButton'

import './Matricula.css'

export default function FormMatricula() {
    const [step, setStep] = useState("")
    const [comp, setComp] = useState("")

    const steps = [1, 2, 3]

    function getCurrStep() {
        switch (step) {
            case "1":
                return <DisObrigatoria/>

            case "2":
                return <DisOptativa/>

            case "3":
                return <FinalForm/>

        }
    }

    function handleStep(e) {

        setStep(e.target.value)
    }

    useEffect(() => {
        setComp(getCurrStep())
    }, [step])

    return (
        <div className="container-main">
            <div className='page-title'>
                <h1 className='title_'>Matrícula</h1>
                <p className='subtitle_'>Registrar</p>
            </div>

            <div className="content-matricula">

                <div className="container-botao">
                    <StepButton funcao={(e) => handleStep(e)} texto={"Disciplina obrigatórias"} index={1} step={step} />

                    <span className="material-symbols-rounded flecha">chevron_right</span>

                    <StepButton funcao={(e) => handleStep(e)} texto={"Disciplina optativas"} index={2} step={step} />

                    <span className="material-symbols-rounded flecha">chevron_right</span>

                    <StepButton funcao={(e) => handleStep(e)} texto={"Finalização"} index={3} step={step} />
                </div>

                {comp ? comp : <DisObrigatoria/> }


            </div>
        </div>
    )
}
