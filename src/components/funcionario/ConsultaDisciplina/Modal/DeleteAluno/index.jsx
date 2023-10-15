import './style.css'
import { Link, useNavigate } from 'react-router-dom';
import { Form } from 'reactstrap';
import API from '../../../../../services/API';

function DeleteAluno(props) {

    const navigate = useNavigate()

    const handleSubmit = () => {
        API.del("alunos", props.cpf)
        navigate("/")
    }

    return (
        <div className="modal_aluno">
            <div className="title">Excluir aluno?
                <button className="close_ btn" onClick={props.func}>
                    <span class="material-symbols-rounded">close</span>
                </button>
            </div>

            <hr />

            <div className="content_modal">
                <p className='text_modal'>Serão excluídos permanentemente:</p>
                <p className='text_modal'>&middot; Dados pessoais<br />
                    &middot; Matrícula<br />
                    &middot; Boletins<br />
                </p>
                <p className='text_modal'>Tem certeza que deseja prosseguir?</p>

                <Form onSubmit={handleSubmit}>

                    <div className='btn-modal'>

                        <Link to={"/"} className='link_cancel'>
                            <button className='cancel_ btn'>
                                Cancelar
                            </button>
                        </Link>

                        <button className='excluir_ btn'>
                            Excluir {props.cpf}
                        </button>

                    </div>
                </Form>


            </div>
        </div>
    )

}

export default DeleteAluno;