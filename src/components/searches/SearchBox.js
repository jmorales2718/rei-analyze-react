import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Search, Button, Container, Input } from "semantic-ui-react";
import _ from "lodash";
import { updateSearchCity } from "../../actions/search";
import getAbbr from "../../data/abbrState";
import cities from "../../data/cities";

const initializeTitles = () => {
	for (let i = 0; i < cities.length; i += 1) {
		cities[i].title = `${cities[i].city}, ${getAbbr(
			cities[i].usstate,
			"abbr"
		)}`;
	}
};

class SearchBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
			results: [],
			value: "",
			errors: {}
		};
	}

	componentWillMount() {
		initializeTitles();
		this.resetComponent();
		this.setState({
			value: this.props.searchFilters.city
				? this.props.searchFilters.city
				: ""
		});
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			value: nextProps.searchFilters.city
				? nextProps.searchFilters.city
				: ""
		});
	}

	onSearchSubmit = () => {
		const errors = this.validate(this.state.value);
		this.setState({ errors });
		if (Object.keys(errors).length === 0) {
			this.props
				.updateSearchCity({
					...this.props.searchFilters,
					city: this.state.value
				})
				.then(() => this.props.history.push("/search"))
				.catch(err =>
					this.setState({ errors: err.response.data.errors })
				);
		}
	};

	validate = value => {
		const errors = {};
		if (!value) errors.search = "Must include a city to search for";
		return errors;
	};

	handleSearchChange = (e, { value }) => {
		this.setState({ isLoading: true, errors: {}, value });

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

	resetComponent = () =>
		this.setState({
			isLoading: false,
			results: []
		});

	handleResultSelect = (e, { result }) => {
		this.setState({ value: result.title });
	};

	render() {
		const { isLoading, results, value, errors } = this.state;
		return (
			<Container text id="searchContainer">
				<Search
					input={
						<Input
							fluid
							action={
								<Button
									color="blue"
									onClick={this.onSearchSubmit}
								>
									Search
								</Button>
							}
							iconPosition="left"
							error={!!errors.search}
						/>
					}
					type="text"
					size={this.props.size}
					placeholder={
						errors.search ? errors.search : this.props.placeholder
					}
					loading={isLoading}
					results={results}
					value={value}
					onSearchChange={this.handleSearchChange}
					onResultSelect={this.handleResultSelect}
					style={
						this.props.width === "50%"
							? {
									padding: "0 45px 0 0",
									width: "50%",
									borderRadius: 0
								}
							: {
									padding: "0 45px 0 0",
									width: "100%",
									borderRadius: 0
								}
					}
				/>
			</Container>
		);
	}
}

const mapStateToProps = state => ({
	searchFilters: state.search.searchFilters
});

SearchBox.propTypes = {
	size: PropTypes.string.isRequired,
	width: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired,
	searchFilters: PropTypes.shape({
		city: PropTypes.string,
		minPrice: PropTypes.string,
		maxPrice: PropTypes.string,
		minNumbBeds: PropTypes.number,
		minNumBaths: PropTypes.number
	}),
	updateSearchCity: PropTypes.func.isRequired
};

SearchBox.defaultProps = {
	searchFilters: {}
};

export default connect(mapStateToProps, { updateSearchCity })(
	withRouter(SearchBox)
);
