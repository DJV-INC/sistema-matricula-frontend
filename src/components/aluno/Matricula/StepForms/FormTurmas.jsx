import { React } from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, redirect } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import API from '../../../../services/API'
import { Form, Button } from 'reactstrap'

export default function FormTurmas() {
    const navigate = useNavigate()
    const [idTurma, setIdTurma] = useState("")
    const [disciplinas, setDisciplinas] = useState([])
    const [tipo, setTipo] = useState("OBRIGATORIA")
    const [idDis, setIdDis] = useState("")
    const [turmas, setTurmas] = useState([])

    const [nomeDis, setNomeDis] = useState("")
    const { idAluno } = useParams()


    let dados = []

    let horario = []

    function getDia(dia) {
        let traco = dia.indexOf("-")
        let newDia = dia.substring(0, traco)
        newDia = newDia.toUpperCase()
        return newDia
    }

    // function handleTeste(e) {
    //     handleStep(e.target.value)
    // }

    function handleDis(event, id, find, classe) {
        const botoes = document.getElementsByClassName(find)
        const botao = event.currentTarget

        for (const element of botoes) {
            element.classList.remove("active")
            element.classList.add(classe)
        }

        console.log(botao)
        botao.setAttribute("class", botao.className.replace(classe, "active"))

        //Setando id da disciplina para fetch das turmas no useEffect
    }


    function handleNome(e) {
        const select = document.getElementById("disciplina")
        const index = select.selectedIndex
        const text = select.options[index].text
        console.log(text)

        setNomeDis(text)
    }

    function handleId(e) {
        setIdDis(e.target.value)
    }

    function handleTipo(e) {
        //Arranjo técnico


        const select = document.getElementById("disciplina")
        select.selectedIndex = 0
        setTipo(e.target.value)
    }

    function handleTurma(e) {
        console.log(e.target.value)
        console.log(idAluno)
        setIdTurma(e.target.value)
    }

    function handleButton(event, find, classe) {
        const botoes = document.getElementsByClassName(find)
        const botao = event.currentTarget

        for (const element of botoes) {
            element.classList.remove("active")
            element.classList.add(classe)
        }

        console.log(botao)
        botao.setAttribute("class", botao.className.replace(classe, "active"))

        //Setando id da disciplina para fetch das turmas no useEffect
    }



    function postTurma() {


        let obj = {
            idAluno: idAluno,
            idTurma: idTurma
        }


        async function post() {
            let inserir = await fetch(`http://localhost:8080/api/v1/matriculas?idAluno=${idAluno}&idTurma=${idTurma}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            console.log(inserir)
            return inserir;
        }

        post()

        navigate(`/aluno/${idAluno}/matricula`)


    }

    useEffect(() => {

        API.get("disciplinas", `tipo=${tipo}`).then((res) => {
            console.log(res.dados)
            setDisciplinas(res.dados)
        })

    }, [tipo])

    useEffect(() => {
        API.get("turmas", `id=${idDis}`).then((res) => {
            console.log(res.dados)
            console.log(horario)
            setTurmas(res.dados)

        })

    }, [idDis])


    return (

        <>
            <div className="form">
                <div>
                    <p className='title_matricula'>Formulário de matrícula</p>
                    <p className='subtitle_matricula'>Para se matricular, escolha o tipo e a disciplina</p>
                </div>

                <div className="form-disciplina">

                    <select className='sel_' name="tipo" id="tipo" onChange={(e) => (handleTipo(e))}>
                        <option selected disabled value="">Tipo</option>
                        <option value="OBRIGATORIA">Obrigatória</option>
                        <option value="OPTATIVA">Optativa</option>
                        <option value="INSTRUMENTAL">Instrumental</option>
                    </select>

                    <select className='sel_' name="disciplina" id="disciplina" onChange={(e) => (handleId(e), handleNome(e))}>
                        <option selected disabled value="">Disciplina</option>
                        {

                            disciplinas.map((disciplina) => {
                                return (
                                    <option value={disciplina.id}>{disciplina.nome}</option>
                                )
                            })

                        }

                    </select>

                    <div>
                        <br/>
                        <p className='title_matricula'>{nomeDis ? `Turmas de ${nomeDis}` : ""}</p>
                        <p className='subtitle_matricula'>{nomeDis ? `Escolha um horário para cursar a disciplina` : ""}</p>
                        <div className="group-btn">
                            {
                                turmas.map((turma) => {
                                    return (


                                        <button value={turma.id} onClick={(e) => (handleButton(e, "btn-turma", "btn-hover"), handleTurma(e))} className="btn-dis btn-turma btn-hover" id="btn-turma">
                                            {turma.diaSemana} <br />
                                            {turma.horario} <br />
                                            {turma.professor.nomeCompleto} <br />
                                        </button>


                                    )
                                })
                            }
                        </div>
                    </div>

                   
                </div>
                <form onSubmit={postTurma} className="post-matricula">
                        <button className="confirm-matricula">Matricular</button>
                    </form>
            </div>
        </>

    )
}
/*
turmas.map((turma) => {
                            return (
                                <section className="section-hr">
                                <h1 className="title-hr">{disciplina.nome}</h1>
                                <p className="subtitle-hr">Selecione o horário</p>
                                <div className="group-btn">
            
                                    <button value={1} className="btn-dis btn-turma btn-hover">
                                        <span className="diasemana">{turma.diaSemana}</span>
                                        <span className="horario">{turma.horario}</span>
                                        <span className="nomeprof">{turma.professor.nomeCompleto}</span>
                                    </button>
                                </div>
                            </section>
                            )
                        })

*/