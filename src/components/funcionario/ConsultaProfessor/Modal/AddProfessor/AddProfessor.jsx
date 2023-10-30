
import React from 'react'
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import API from '../../../../../services/API'

import './AddProfessor.css'

export default function AddProfessor(props) {
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault();
 
    const dados = {
       nome: event.target.nome.value,
       cpf: event.target.cpf.value,
       telefone: event.target.telefone.value
    };
 
    API.post("professores", dados);
 
    alert("Professor cadastrado");
 
    navigate(-1);
 }

  return (
    <div className='modal-add-disciplina'>
      <Row>
        <Col
          className="bg-light border, field-add-disciplina"
          md={{
            offset: 3,
            size: 6
          }}
          sm="12"
        >
            <div className="title">Adicionar professor
                <button className="close_ btn" onClick={props.func}>
                    <span class="material-symbols-rounded">close</span>
                </button>
            </div>
          <Form method='POST' onSubmit={handleSubmit}>

            {/* Titulo da pagina */}

            
            <hr />
            <h2>Dados</h2>

            {/* Formularios */}

            <FormGroup>

              {/* Form do Nome */}

              <Label for="NomeCompleto">
                Nome do Professor
              </Label>
              <Input
                id="nome"
                
                name="nome"
              />
            </FormGroup>

            <FormGroup>
              <Label for="CPF">
                CPF
              </Label>
              <Input
                id="CPF"
                name="CPF"
                type="CPF"
              />
            </FormGroup>

            <FormGroup>
              <Label for="telefone">
                Telefone
              </Label>
              <Input
              id="telefone"
              name="telefone"
              type="telefone"
              />
            </FormGroup>

            <Row>
              <div className='botoes-div-add-disciplina'>

                <Link to={"/"} className='Link-add-disciplina-cancel'>
                  <button className="Cancel btn">
                    Cancelar
                  </button>
                </Link>

                <Button className='Confirm'>
                  Adicionar
                </Button>

              </div>
            </Row>

          </Form>
        </Col>
      </Row>
    </div >
  )
}
