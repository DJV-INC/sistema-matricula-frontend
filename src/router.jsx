import {Route, Routes} from "react-router-dom"
import React from "react";

import Home from "./pages/Home";

export default function Router() {
  	return (
		<Routes>
			<Route exact path="/" element={<Home/>}/>
			<Route exact path="/:modalType/:id" element={<Home/>}/>
			<Route exact path="/:modalType" element={<Home/>}/>
		</Routes>
  	);
}
