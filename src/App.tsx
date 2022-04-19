import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import PostList from "./Pages/PostList";
import PostView from "./Pages/PostView";
import "./App.css";

function App() {
	return (
		<Routes>
			<Route element={<></>}>
				<Route path="/" element={<Home/>} 	/>
				<Route path="/postlist/:postType" element={<PostList/>} />
				<Route path="/postview/:posttype/:postID" element={<PostView/>} />
			</Route>
		</Routes>
	);
}

export default App;
