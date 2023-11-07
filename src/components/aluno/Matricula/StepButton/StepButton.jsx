import React, {Component} from "react"
import './StepButton.css'



export default function StepButton(props){
    const texto = props.texto
    const index = props.index
    const funcao = props.funcao
    const step = props.step

    return (
        <button onClick={funcao} value={index} className="botao" id="botao"> <span className="index">{index}</span> {texto} </button>
    )
}