import React from "react";
import { Route, Routes } from "react-router-dom";

import BaseLayout from "./Common/Components/BaseLayout";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import PostList from "./Pages/PostList";
import PostView from "./Pages/PostView";
import "./App.css";

const App = () => {
	return (
		<Routes>
			<Route element={<BaseLayout/>}>
				<Route path="/" element={<Home/>} />
				<Route path="/postlist/:postType" element={<PostList/>} />
				<Route path="/postview/:postType/:postID" element={<PostView/>} />
				<Route path="*" element={<Error/>} />
			</Route>
		</Routes>
	);
}

export default App;
