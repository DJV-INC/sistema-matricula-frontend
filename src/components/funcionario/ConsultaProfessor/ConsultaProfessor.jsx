import TableContainer from "./TableContainer/TableContainer";

function ConsultaProfessor() {
    return (
        <div className="container-main">
            <div className="page-title">
            <h1 className='title_'>Professores</h1>
            <p className='subtitle_'>Registros</p>
            </div>
            <TableContainer />
        </div>
    )
}

export default ConsultaProfessor;