import React from 'react'
import { useState, useEffect } from 'react'
import DisObrigatoria from './StepForms/DisObrigatoria'
import DisOptativa from './StepForms/DisOptativa'
import FinalForm from './StepForms/FinalForm'
import StepButton from './StepButton/StepButton'
import FormTurmas from './StepForms/FormTurmas'

import './Matricula.css'

export default function FormMatricula() {
    const [step, setStep] = useState("")
    const [ids, setIds] = useState("")

    let arr = []

    const childToParent = (childdata) => {
        arr.push(childdata)
        setIds(arr)
    }

    // function startNav() {
    //     document.getElementById("botao").setAttribute("disabled", "")
    // }

    // useEffect(() => {

    //     startNav()
    // }, [])

    /*function getCurrStep() {
        switch (step) {
            case "1":
                return <DisObrigatoria childToParent={childToParent}/>

            case "2":
                return <DisOptativa />

            case "3":
                return <FinalForm ids={"teste"}/>

        }
    }*/

    return (
        <div className="container-main">
            <div className='page-title'>
                <h1>{ids}</h1>
                <h1 className='title_'>Matrícula</h1>
                <p className='subtitle_'>Registrar</p>
            </div>

            <div className="content-matricula">

                {/* <div className="container-botao">
                    <StepButton  texto={"Disciplina obrigatórias"} index={1} step={step} disabled={false} />

                    <span className="material-symbols-rounded flecha">chevron_right</span>

                    <StepButton  texto={"Disciplina optativas"} index={2} step={step} disabled={false} />
                    
                </div> */}

                <FormTurmas/>

                {/* {comp ? comp : <DisObrigatoria childToParent={childToParent}/> } */}


            </div>
        </div>
    )
}


/*
 const handleStep = (e) => {
        const botoes = document.getElementsByClassName("botao")
        const botao = e.currentTarget

        for(const element of botoes) {
            element.removeAttribute("disabled")
        }

        botao.setAttribute("disabled", "")

        setStep(e.target.value)
    }


*/ 