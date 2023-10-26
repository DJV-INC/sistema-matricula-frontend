import "./ConsultaProfessor.css"
import TableContainer from "./TableContainer/TableContainer";

function ConsultaProfessor() {
    return (
        <div className="container-main">
            <div className="page-title">
                <h1>Professores</h1>
                <p>Registros</p>
            </div>
            <TableContainer />
        </div>
    )
}

export default ConsultaProfessor;