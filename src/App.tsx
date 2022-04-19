import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import "./App.css";

function App() {
	return (
		<Routes>
			<Route element={<></>}>
				<Route path="/" element={<Home/>} 	/>
				<Route path="/postlist/:postType" element={<></>} />
				<Route path="/postview/:posttype/:postID" element={<></>} />
			</Route>
		</Routes>
	);
}

export default App;
