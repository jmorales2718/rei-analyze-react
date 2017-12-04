import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import SearchPage from "./components/pages/SearchPage";
import LoginPage from "./components/pages/LoginPage";
import SignupPage from "./components/pages/SignupPage";

const App = () => (
	<div>
		<Route path="/" exact component={HomePage} />
		<Route path="/search" exact component={SearchPage} />
		<Route path="/login" exact component={LoginPage} />
		<Route path="/signup" exact component={SignupPage} />
	</div>
);

export default App;
