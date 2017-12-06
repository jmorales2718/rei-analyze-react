import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import HomePage from "./components/pages/HomePage";
import SearchPage from "./components/pages/SearchPage";
import LoginPage from "./components/pages/LoginPage";
import SignupPage from "./components/pages/SignupPage";
import DashboardPage from "./components/pages/DashboardPage";
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";

const App = ({ location }) => (
	<div>
		<Route location={location} path="/" exact component={HomePage} />
		<Route
			location={location}
			path="/search"
			exact
			component={SearchPage}
		/>
		<GuestRoute
			location={location}
			path="/login"
			exact
			component={LoginPage}
		/>
		<GuestRoute
			location={location}
			path="/signup"
			exact
			component={SignupPage}
		/>
		<UserRoute
			location={location}
			path="/dashboard"
			exact
			component={DashboardPage}
		/>
	</div>
);

App.propTypes = {
	location: PropTypes.shape({
		pathname: PropTypes.string.isRequired
	}).isRequired
};

export default App;
