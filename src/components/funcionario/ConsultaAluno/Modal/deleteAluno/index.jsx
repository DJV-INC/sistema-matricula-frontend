import './style.css'
import { Link } from 'react-router-dom';

function DeleteAluno(){

    return(
        <div className="modal_delete_aluno">
        <div className="title">Excluir aluno?</div>

        <div className="content_modal">
            <p className='text_modal'>Serão excluídos permanentemente:<br/>
                &middot;Dados pessoais<br/>
                &middot;Matrícula<br/>
                &middot;Boletins<br/>
            </p>

            <div className='botoes-div-addaluno'>

            <Link to={"/"} className='Link-addAluno-cancel'>
            <button className="Cancel btn">
            Cancelar
            </button>
            </Link>

            <button className='Confirm'>
            Excluir
            </button>

</div>
        </div>

    </div>
    )

}

export default DeleteAluno;