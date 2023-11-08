import React, {Component} from "react"
import './StepButton.css'



export default function StepButton(props){
    const texto = props.texto
    const index = props.index
    const funcao = props.funcao
    const step = props.step
    const disabled = props.disabled

    if (disabled) {
        return (
            <button onClick={funcao} value={index} className="botao" id="botao" disabled > <span className="index">{index}</span> {texto} </button>
        )
    } else {
        return (
            <button onClick={funcao} value={index} className="botao" id="botao"> <span className="index">{index}</span> {texto} </button>
        )
    }

   
}