
import React from 'react'
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import API from '../../../../../services/API'

import './AddDiciplina.css'

export default function AddDiciplina(props) {
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault();
 
    const dados = {
       nome: event.target.nome.value,
       tipo: event.target.tipo.value
    };
 
    API.post("disciplinas", dados);
 
    alert("Disciplina cadastrada");
 
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
            <div className="title">Adicionar disciplina
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
                Nome da Disciplina
              </Label>
              <Input
                id="nome"
                name="nome"
              />
            </FormGroup>

            <FormGroup>
              <Label for="tipo">
                Tipo
              </Label>
              <Input
                id="tipo"
                name="tipo"
                type="tipo"
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
