import {Route, Routes} from "react-router-dom"
import React from "react";

import Home from "./pages/Home";
import AddAluno from "./components/AddAluno";





export default function Router() {
  	return (
		<Routes>
			<Route exact path="/" element={<Home/>}/>
			<Route exact path="/addAluno" element={<AddAluno/>}/>
		</Routes>
  	);
}
