import { Link } from 'react-router-dom';
import { Form } from 'reactstrap';
import API from '../../../../../services/API';

import './DeleteDisciplina.css'

function DeleteDisciplina({id, func}) {

    const handleSubmit = () => {
        API.del("disciplinas", id)
        func()
    }

    return (
        <div className="modal_aluno">
            <div className="title">Excluir disciplina?
                <button className="close_ btn" onClick={func}>
                    <span class="material-symbols-rounded">close</span>
                </button>
            </div>

            <hr />

            <div className="content_modal">
                <p className='text_modal'>Serão excluídos permanentemente:</p>
                <p className='text_modal'>
                    &middot; Nome<br />
                    &middot; Tipo<br />
                </p>
                <p className='text_modal'>Tem certeza que deseja prosseguir?</p>

                <Form onSubmit={handleSubmit}>

                    <div className='btn-modal'>

                        <Link to={"/disciplina"} className='link_cancel'>
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

export default DeleteDisciplina;