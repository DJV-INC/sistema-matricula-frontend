
import React, { useEffect, useState } from 'react'
import './AddAluno.css'
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import Form1 from 'react-bootstrap/Form'
import { IMaskInput } from 'react-imask'
import API from '../../../../../services/API'


export default function AddAluno({ close }) {
  const url = "https://viacep.com.br/ws"
  const [viacep, setViacep] = useState("00000000")
  const [data, setData] = useState([])

  function handleViacep(e) {
    ocultarErro();
    console.log(data)
    let cep = e.target.value
    if (cep.length == 8) {
      if (data.erro) {
        setViacep(cep)
        console.log(`data.erro cep = ${viacep}`)
        exibirErro();
      } else {
        console.log(`else cep = ${viacep}`)
        ocultarErro();
        setViacep(cep)
      }

    }


  }

  function limpaEndereco() {
    let campos = document.getElementsByClassName("endereco")

    for (let i = 0; i < campos.length; i++) {
      campos[i].value = ""
    }
  }

  
  function ocultarErro() {
    const span = document.getElementById("errocep")
    span.style.display = "none"
  }

  function exibirErro() {
    const campoRua = document.getElementById("Logradouro")
    if (campoRua.value === "") {
      const span = document.getElementById("errocep")
      span.style.display = "inline"
    }
  }

  useEffect(() => {
    async function fetchCep() {
      const resposta = await fetch(`${url}/${viacep}/json/`)

      const res = await resposta.json()


      return res

    }

    fetchCep().then((res) => {
      if (!res.erro) {
        ocultarErro();
      }
        setData(res)
    })
  }, [viacep])

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

    API.post("alunos", dados);

    alert("Aluno(a) cadastrado");

    close()
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
            <button className="close_ btn" onClick={close}>
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
                placeholder="Digite o nome completo"
              />
            </FormGroup>

            {/* Form do RG */}

            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="RG">
                    RG
                  </Label>
                  <Form1.Control
                    id="RG"
                    name="RG"
                    as={IMaskInput}
                    mask="00.000.000-0"
                    placeholder="12.345.678-9"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="CPF">
                    CPF
                  </Label>
                  <Form1.Control
                    id="CPF"
                    name="CPF"
                    as={IMaskInput}
                    mask="000.000.000-00"
                    placeholder="123.456.789.12"
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
                placeholder="exemplo@gmail.com"
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
                  <Form1.Control
                    id="Tell"
                    name="Tell"
                    as={IMaskInput}
                    mask="(00) 00000-0000"
                    placeholder="(11) 12345-1234"
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
                  <Form1.Control
                    onBlur={handleViacep}
                    id="CEP"
                    name="CEP"
                    as={IMaskInput}
                    mask="00000000"
                    placeholder="00000000"
                  />
                  <span className='errocep' id='errocep'>CEP inválido</span>
                </FormGroup>
              </Col>
              <Col md={8}>
                <FormGroup>
                  <Label for="Numero">
                    Número da rua
                  </Label>
                  <Input
                    id="Numero"
                    name="Numero"
                    className="endereco"
                  />
                </FormGroup>

              </Col>
            </Row>



            <FormGroup>
              <Label for="Logradouro">
                Logradouro
              </Label>
              <Input
                disabled={true}
                value={data.logradouro ? data.logradouro : ""}
                id="Logradouro"
                name="Logradouro"
                className="endereco"
              />
            </FormGroup>

            <FormGroup>
              <Label for="Bairro">
                Bairro
              </Label>
              <Input
                value={data.bairro ? data.bairro : ""}
                disabled={true}
                id="Bairro"
                name="Bairro"
                className="endereco"
              />
            </FormGroup>



            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="Cidade">
                    Cidade
                  </Label>
                  <Input
                    value={data.localidade ? data.localidade : ""}
                    disabled={true}
                    id="Cidade"
                    name="Cidade"
                    className="endereco"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="Estado">
                    Estado
                  </Label>
                  <Input
                    value={data.uf ? data.uf : ""}
                    disabled={true}
                    id="Estado"
                    name="Estado"
                    className="endereco"
                  />
                </FormGroup>
              </Col>
            </Row>


            <Row>
              <div className='botoes-div-addaluno'>

                <button onClick={close} className='Cancel btn'>
                  Cancelar
                </button>

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
