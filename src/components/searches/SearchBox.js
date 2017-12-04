import React from "react";
// import PropTypes from "prop-types";
import { Search, Button } from "semantic-ui-react";
import _ from "lodash";
import getAbbr from "../../data/abbrState";
import cities from "../../data/cities";

const initializeTitles = () => {
	for (let i = 0; i < cities.length; i += 1) {
		// console.log("cities.city: " + cities[i].city);
		cities[i].title = `${cities[i].city}, ${getAbbr(
			cities[i].usstate,
			"abbr"
		)}`;
	}
};

class SearchBox extends React.Component {
	state = {
		isLoading: false,
		results: [],
		value: ""
	};

	componentWillMount() {
		initializeTitles();
		this.resetComponent();
	}

	resetComponent = () =>
		this.setState({ isLoading: false, results: [], value: "" });

	handleSearchChange = (e, { value }) => {
		this.setState({ isLoading: true, value });

		setTimeout(() => {
			if (this.state.value.length < 1) this.resetComponent();

			const re = new RegExp(_.escapeRegExp(this.state.value), "i");
			const isMatch = result => re.test(result.city);

			this.setState({
				isLoading: false,
				results: _.filter(cities, isMatch)
			});
		}, 500);
	};

	handleResultSelect = (e, { result }) =>
		this.setState({ value: result.title });

	render() {
		const { isLoading, results, value } = this.state;
		return (
			<Search
				input={{
					fluid: true,
					action: <Button color="blue">Search</Button>,
					iconPosition: "left"
				}}
				type="text"
				size="huge"
				placeholder="Enter a city to start analyzing properties"
				loading={isLoading}
				results={results}
				value={value}
				onSearchChange={this.handleSearchChange}
				onResultSelect={this.handleResultSelect}
				style={{
					width: "100%",
					padding: "45px 0 0 0",
					borderRadius: 0
				}}
			/>
		);
	}
}

export default SearchBox;
