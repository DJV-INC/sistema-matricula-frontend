
import React from 'react'
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import API from '../../../../../services/API'

import './AddDiciplina.css'

export default function AddDiciplina({ closeModal }) {

  function handleSubmit(event) {
    event.preventDefault();
 
    const dados = {
       nome: event.target.nome.value,
       tipo: event.target.tipo.value
    };
 
    API.post("disciplinas", dados).then((res) => {
      const mensagem = API.errorHandler(res, "disciplina")
      console.log(mensagem)
      if (mensagem.dados.id > 0) {
        alert("Disciplina cadastrada com sucesso")
      } else {
        alert(mensagem.dados.mensagem)
      }
    })

 

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
                <button className="close_ btn" onClick={closeModal}>
                    <span class="material-symbols-rounded">close</span>
                </button>
            </div>
          <Form method='POST' onSubmit={handleSubmit}>

            {/* Titulo da pagina */}

            
            {/* <hr /> */}
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
                type="select"
              >
                <option value="OBRIGATORIA">Obrigatória</option>
                <option value="OPTATIVA">Optativa</option>
                <option value="INSTRUMENTAL">Instrumental</option>
                </Input>
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
