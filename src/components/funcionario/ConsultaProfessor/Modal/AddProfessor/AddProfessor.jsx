
import React from 'react'
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import { IMaskInput } from 'react-imask'
import Form1 from 'react-bootstrap/Form'
import API from '../../../../../services/API'

import './AddProfessor.css'

export default function AddProfessor({ closeModal }) {
  function handleSubmit(event) {
    event.preventDefault();
 
    const dados = {
       nomeCompleto: event.target.nome.value,
       cpf: event.target.CPF.value,
       telefone: event.target.telefone.value
    };
 
    API.post("professores", dados).then((res) => {
      const mensagem = API.errorHandler(res, "professor")
      console.log(mensagem)
      alert(mensagem.dados.mensagem)
    })

 
    closeModal();
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
                <button className="close_ btn" onClick={closeModal}>
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
              <Form1.Control
                id="CPF"
                name="CPF"
                type="CPF"
                as={IMaskInput}
                mask="000.000.000-00"
                placeholder="123.456.789.11"
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

                <Button onClick={closeModal} className='Cancel btn'>
                  Cancelar
                </Button>

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