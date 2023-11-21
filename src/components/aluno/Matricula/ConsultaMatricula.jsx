import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import API from '../../../services/API'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function ConsultaMatricula(args) {
   const [matriculas, setMatriculas] = useState([])
   const { idAluno } = useParams()

   const [modal, setModal] = useState(false)
   const [idMatricula, setIdMatricula] = useState("")

   function openModal(e) {
      toggle()
      getIdMatricula(e)
   }
   
   function toggle() {
      setModal(!modal)
   }

   function desfazerMatricula() {
      API.del("matriculas", idMatricula)
      toggle()
   }
   
   function getIdMatricula(e){
      console.log(e.target.value)
      setIdMatricula(e.target.value)
   }

   useEffect(() => {
      API.get("matriculas", `idAluno=${idAluno}`).then((res) => {
         console.log(res.dados)
         setMatriculas(res.dados)
      })
   }, [])



   return (
      <div className="container-main">
         <div>
            <Modal isOpen={modal} toggle={toggle} {...args} backdrop={false} >
               <ModalHeader toggle={toggle}>Desfazer matricula</ModalHeader>
               <ModalBody>
                  
               </ModalBody>
               <ModalFooter>
                  <Button color="secondary" onClick={toggle}>
                     Cancelar
                  </Button>
                  <Button color="danger" onClick={desfazerMatricula}>
                     Desfazer
                  </Button>
               </ModalFooter>
            </Modal>
         </div>
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
                     <th></th>
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
                              <td><button value={matricula.id} className='btn-undo' onClick={openModal}><span class="material-symbols-rounded">undo
                              </span>Desfazer</button></td>
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
