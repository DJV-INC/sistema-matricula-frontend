import React from 'react'
import { useState, useEffect } from 'react'
import DisObrigatoria from './StepForms/DisObrigatoria'
import DisOptativa from './StepForms/DisOptativa'
import FinalForm from './StepForms/FinalForm'


export default function FormMatricula() {
    // const [step, setStep] = useState("")
    // const [comp, setComp] = useState("")

    // const steps = [1, 2, 3]

    // function getCurrStep(){
    //     switch (step) {
    //         case 1:
    //             return <DisObrigatoria />

    //         case 2:
    //             return <DisOptativa />

    //         case 3:
    //             return <FinalForm />
    //     }
    // }

    // useEffect(()=>{
    //      setComp(getCurrStep())
    // },[step]) 

    return (
        <div className="container-main">
            <div className='page-title'>
                <h1 className='title_'>Matrícula</h1>
                <p className='subtitle_'>Registrar</p>
            </div>

            {/* <button onClick={setStep(1)} style={{width: '120px'}}>1</button>
            <button onClick={setStep(2)} style={{width: '120px'}}>2</button>
            <button onClick={setStep(3)} style={{width: '120px'}}>3</button>
            
            <div className="form">
                {comp ? comp :  <DisObrigatoria/>}
            </div> */}
        </div>
    )
}
