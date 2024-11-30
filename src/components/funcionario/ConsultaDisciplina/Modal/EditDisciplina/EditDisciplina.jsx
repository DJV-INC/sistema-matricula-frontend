
import React, { useEffect, useState } from 'react'
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { Link, useParams } from 'react-router-dom'
import API from '../../../../../services/API';

import './EditDisciplina.css'

export default function EditDisciplina({ closeModal }) {
  const {id} = useParams()
  
  const [data, setData] = useState({})
  const [nome, setNome] = useState("")
  const [tipo, setTipo] = useState("")

  function handleNome(e) {
      setNome(e.target.value)
  }

  function handleTipo(e) {
    setTipo(e.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
 
    const dados = {
       id: id,
       nome: event.target.nome.value !== "" ? event.target.nome.value : data.dados.nome,
       tipo: event.target.tipo.value !== "" ? event.target.tipo.value : data.dados.tipo,
    };
 
    API.patch("disciplinas", dados);
 
    alert("Disciplina atualizada");
 
    closeModal()
 }

  useEffect(() => {
    API.get(`disciplinas`, `id=${id}`).then((res) => {
      if (res.error) {
        alert(res.error)
      }
      setData(res)
      setNome(res.dados.nome)
      setTipo(res.dados.tipo)
    }).catch((error) => console.error(error))
  }, []);

  
  try {  


  return (
    
    <div className='modal-addaluno'>
      <Row>
        <Col
          className="bg-light border, field-addaluno"
          md={{
            offset: 3,
            size: 6
          }}
          sm="12"
        >

          <div className="title">Editar Disciplina
                <button className="close_ btn" onClick={closeModal}>
                    <span class="material-symbols-rounded">close</span>
                </button>
            </div>
          <Form method='POST' onSubmit={handleSubmit}>

            {/* Titulo da pagina */}

            <hr />
            <h2>Dados da Disciplina</h2>

            {/* Formularios */}


              <FormGroup>

              {/* Form do Nome */}

              <Label for="NomeCompleto">
                Nome da Disciplina
              </Label>
              <Input
                id="nome"
                name="nome"
                value={nome}
                onChange={handleNome}
              />
              </FormGroup>

              <FormGroup>
              <Label for="tipo">
                Tipo
              </Label>
              <Input
                id="tipo"
                name="tipo"
                type="select"
                value={tipo}
                onChange={handleTipo}
              >
                <option value="OBRIGATORIA">Obrigatória</option>
                <option value="OPTATIVA">Optativa</option>
                <option value="INSTRUMENTAL">Instrumental</option>
                </Input>
            </FormGroup>



            <Row>
              <div className='botoes-div-addaluno'>

                  <Button onClick={closeModal} className='Cancel btn'>
                    Cancelar
                  </Button>

                  <Button className='Confirm'>
                    Atualizar
                  </Button>

              </div>
            </Row>
          </Form>
        </Col>
      </Row>
    </div >
  )

  } catch (error) {
    console.error(error);
  }
}
