
import React, { useEffect, useState } from 'react'
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import API from '../../../../../services/API';

import './EditProfessor.css'

export default function EditProfessor(props) {
  const navigate = useNavigate()
  const {id} = useParams()
  
  const [data, setData] = useState({})
  const [nome, setNome] = useState("")
  const [cpf, setCpf] = useState("")
  const [telefone, setTelefone] = useState("")

  function handleNome(e) {
      setNome(e.target.value)
  }

  function handleCpf(e) {
    setCpf(e.target.value)
  }

  function handleTelefone(e) {
    setTelefone(e.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
 
    const dados = {
       id: data.dados.id,
       nomeCompleto: event.target.nomeCompleto.value !== "" ? event.target.nomeCompleto.value : data.dados.nomeCompleto,
       cpf: event.target.CPF.value !== "" ? event.target.CPF.value : data.dados.cpf,
       telefone: event.target.telefone.value !== "" ? event.target.telefone.value : data.dados.telefone
    };

    console.log(dados)
 
    API.patch("professores", dados);
 
    alert("Professor atualizado");
 
    navigate(-1);
 }


  useEffect(() => {
    API.get(`professores`, `cpf=${id}`).then((res) => {
      if (res.error) {
        alert(res.error)
      }
      console.log(res)
      setData(res)
      setNome(res.dados.nomeCompleto)
      setCpf(res.dados.cpf)
      setTelefone(res.dados.telefone)
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

          <div className="title">Editar professor
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
                Nome do professor
              </Label>
              <Input
                id="nomeCompleto"
                name="nomeCompleto"
                value={nome}
                onChange={handleNome}
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
                value={cpf}
                onChange={handleCpf}
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
              value={telefone}
              onChange={handleTelefone}
              />
            </FormGroup>

            <Row>
              <div className='botoes-div-addaluno'>

                  <Link to={"/professor"} className="Cancel">
                    Cancelar
                  </Link>

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
