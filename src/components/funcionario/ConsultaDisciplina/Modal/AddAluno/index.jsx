
import React from 'react'
import './style.css'
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import API from '../../../../../services/API'


export default function AddAluno(props) {
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault();
 
    const dados = {
       nomeCompleto: event.target.NomeCompleto.value,
       rg: event.target.RG.value,
       cpf: event.target.CPF.value,
       email: event.target.Email.value,
       dataNasc: event.target.DataNasc.value,
       telefone: event.target.Tell.value,
       cep: event.target.CEP.value,
       logradouro: event.target.Logradouro.value,
       numero: event.target.Numero.value,
       bairro: event.target.Bairro.value,
       cidade: event.target.Cidade.value,
       estado: event.target.Estado.value,
    };
 
    API.post("http://localhost:8080/api/v1/alunos", dados);
 
    alert("Aluno(a) cadastrado");
 
    navigate(-1);
 }

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
            <div className="title">Adicionar aluno
                <button className="close_ btn" onClick={props.func}>
                    <span class="material-symbols-rounded">close</span>
                </button>
            </div>
          <Form method='POST' onSubmit={handleSubmit}>

            {/* Titulo da pagina */}

            
            <hr />
            <h2>Dados Pessoais</h2>

            {/* Formularios */}

            <FormGroup>

              {/* Form do Nome */}

              <Label for="NomeCompleto">
                Nome Completo
              </Label>
              <Input
                id="NomeCompleto"
                name="Nome"
              />
            </FormGroup>

            {/* Form do RG */}

            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="RG">
                    RG
                  </Label>
                  <Input
                    id="RG"
                    name="RG"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="CPF">
                    CPF
                  </Label>
                  <Input
                    id="CPF"
                    name="CPF"
                  />
                </FormGroup>
              </Col>
            </Row>



            <FormGroup>
              <Label for="Email">
                Email
              </Label>
              <Input
                id="Email"
                name="Email"
                type="Email"
              />
            </FormGroup>



            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="DataNasc">
                    Data de Nascimento
                  </Label>
                  <Input
                    id="DataNasc"
                    name="DataNasc"
                    type="date"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="Tell">
                    Telefone
                  </Label>
                  <Input
                    id="Tell"
                    name="Tell"
                  />
                </FormGroup>
              </Col>
            </Row>



            <br />
            <h2>Endereço</h2>



            <Row>
              <Col md={4}>
                <FormGroup>
                  <Label for="CEP">
                    CEP
                  </Label>
                  <Input
                    id="CEP"
                    name="CEP"
                  />
                </FormGroup>
              </Col>
              <Col md={8}>
                <FormGroup>
                  <Label for="Logradouro">
                    Logradouro
                  </Label>
                  <Input
                    id="Logradouro"
                    name="Logradouro"
                  />
                </FormGroup>
              </Col>
            </Row>



            <Row>
              <Col md={4}>
                <FormGroup>
                  <Label for="Numero">
                    Número
                  </Label>
                  <Input
                    id="Numero"
                    name="Numero"
                  />
                </FormGroup>
              </Col>
              <Col md={8}>
                <FormGroup>
                  <Label for="Bairro">
                    Bairro
                  </Label>
                  <Input
                    id="Bairro"
                    name="Bairro"
                  />
                </FormGroup>
              </Col>
            </Row>



            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="Cidade">
                    Cidade
                  </Label>
                  <Input
                    id="Cidade"
                    name="Cidade"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="Estado">
                    Estado
                  </Label>
                  <Input
                    id="Estado"
                    name="Estado"
                  />
                </FormGroup>
              </Col>
            </Row>


            <Row>
              <div className='botoes-div-addaluno'>

                <Link to={"/"} className='Link-addAluno-cancel'>
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
