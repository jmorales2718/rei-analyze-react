import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container } from "semantic-ui-react";
import PropertySearchForm from "../forms/PropertySearchForm";
import PropertyCard from "../cards/PropertyCard";
import SimpleMenu from "../menus/SimpleMenu";

class SearchPage extends React.Component {
	constructor(props) {
		// console.log("Constructor is called");
		super(props);
		// console.log(`\tsuper.props called with results value: ${props.results}`);
		this.state = {
			results: props.results ? props.results : [],
			properties: {}
		};
		// console.log(`\tState set with results value: ${this.state.results}`);
	}

	componentWillMount() {
		// console.log("Component about to mount");
	}

	componentWillReceiveProps(props) {
		// console.log(`Componenet will recieve props object with value: ${props}`);
	}

	render() {
		// console.log(`Results: ${this.props.results} : ${this.state.results}`);
		return (
			<div>
				<SimpleMenu />
				<PropertySearchForm />
				<Container fluid style={{ paddingTop: "50px" }}>
					{this.state.results.map(property => (
						<PropertyCard property={property} key={property.key} />
					))}
				</Container>
			</div>
		);
	}
}

const mapStateToProps = state => {
	// console.log("Setting props from redux");

	return {
		results: state.search.results
	};
};

SearchPage.propTypes = {
	results: PropTypes.arrayOf(
		PropTypes.shape({
			image: PropTypes.string,
			address: PropTypes.string.isRequired,
			city: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			numBeds: PropTypes.number.isRequired,
			numBaths: PropTypes.number.isRequired,
			squareFeet: PropTypes.number.isRequired,
			key: PropTypes.number.isRequired
		})
	)
};

SearchPage.defaultProps = {
	results: []
};

export default connect(mapStateToProps)(SearchPage);
