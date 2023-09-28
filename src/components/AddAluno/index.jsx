
import React from 'react'
import './style.css'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'

export default function AddAluno() {
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



          <Form>



            <h1>Adicionar Aluno</h1>
            <hr />
            <h2>Dados Pessoais</h2>



            <FormGroup>
              <Label for="NomeCompleto">
                Nome Completo
              </Label>
              <Input
                id="NomeCompleto"
                name="Nome"
              />
            </FormGroup>



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


            <Row className='button-div-addaluno'>
              <div >

                  <Button className="Cancel">
                    Cancelar
                  </Button>

                  <> </>

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
