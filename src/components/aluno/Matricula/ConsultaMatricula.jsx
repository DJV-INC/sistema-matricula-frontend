import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import API from '../../../services/API'

export default function ConsultaMatricula() {
   const [matriculas, setMatriculas] = useState([])
   const { idAluno } = useParams()

   useEffect(() => {
      API.get("matriculas", `idAluno=${idAluno}`).then((res) => {
         console.log(res.dados)
         setMatriculas(res.dados)
      })
   }, [])




   return (
      <div className="container-main">
         <div className='page-title head-matricula'>
            <div className="titles">
               <h1 className='title_'>Matrícula</h1>
               <p className='subtitle_'>Registro</p>
            </div>
            <Link to={"formulario"} className="add-aluno-btn matricula">
               <span class="material-symbols-rounded">add</span>
               <span>Criar matricula</span>
            </Link>
         </div>
         <div>

            <table className="table_">
               <thead>
                  <tr className="tr_">
                     <th>Disicplina</th>
                     <th>Dia</th>
                     <th>Horário</th>
                     <th>Profesor</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     console.log(matriculas)
                  }
                  {
                     matriculas.map((matricula) => {
                        return (
                           <tr>
                              <td>{matricula.turma.disciplina.nome}</td>
                              <td>{matricula.turma.diaSemana}</td>
                              <td>{matricula.turma.horario}</td>
                              <td>{matricula.turma.professor.nomeCompleto}</td>
                        </tr>
                        )
                     })
                  }
               </tbody>
            </table>
         </div>
      </div>
   )
}
