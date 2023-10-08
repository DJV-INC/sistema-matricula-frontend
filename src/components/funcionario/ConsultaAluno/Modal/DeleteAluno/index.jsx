import './style.css'
import { Link, useNavigate } from 'react-router-dom';
import { Form } from 'reactstrap';

function DeleteAluno() {

    const navigate = useNavigate()

    const handleSubmit = () => {
        alert("Excluiu")

        navigate("/deletealuno")
    }

    return (
        <div className="modal_aluno">
            <div className="title">Excluir aluno?</div>

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
                            Excluir
                        </button>

                    </div>
                </Form>


            </div>
        </div>
    )

}

export default DeleteAluno;