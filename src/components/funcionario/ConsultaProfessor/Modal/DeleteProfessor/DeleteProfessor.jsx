import { Link, useNavigate } from 'react-router-dom';
import { Form } from 'reactstrap';
import API from '../../../../../services/API';

import './DeleteProfessor.css'

function DeleteProfessor({ id , closeModal}) {
    const navigate = useNavigate()

    const handleSubmit = () => {
        API.del("professores", id).then((res) => {
            const mensagem = API.errorHandler(res, "professor")
            alert(mensagem.dados.mensagem)
        })
        navigate("/professor")
    }

    return (
        <div className="modal_aluno">
            <div className="title">Excluir professor?
                <button className="close_ btn" onClick={closeModal}>
                    <span class="material-symbols-rounded">close</span>
                </button>
            </div>

            <hr />

            <div className="content_modal">
                <p className='text_modal'>Serão excluídos permanentemente:</p>
                <p className='text_modal'>
                    &middot; Nome<br />
                    &middot; CPF<br />
                    &middot; Telefone<br/>
                </p>
                <p className='text_modal'>Tem certeza que deseja prosseguir?</p>

                <Form onSubmit={handleSubmit}>

                    <div className='btn-modal'>

                        <div to={"/professor"} className='link_cancel'>
                            <button onClick={closeModal} className='cancel_ btn'>
                                Cancelar
                            </button>
                        </div>
            
                        <button className='excluir_ btn'>
                            Excluir
                        </button>

                    </div>
                </Form>


            </div>
        </div>
    )

}

export default DeleteProfessor;