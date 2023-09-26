import { Fragment } from "react";
import ConsultaAluno from "../components/ConsultaAluno";
import HeaderNavbar from "../components/HeaderNavbar";

function Home() {
  return (
    <Fragment>
      <HeaderNavbar/>
      <ConsultaAluno/>
    </Fragment>
  );
}

export default Home;
