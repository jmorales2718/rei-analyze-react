import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
	<div>
		<h1>HomePage</h1>
		<Link to="/search">Search</Link>
	</div>
);

export default HomePage;
