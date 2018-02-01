import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Grid, Dropdown } from "semantic-ui-react";

import DropdownPrice from "../searches/DropdownPrice";
import {
	updateMinPrice,
	updateMaxPrice,
	updateMinNumBeds,
	updateMinNumBaths
} from "../../actions/search";

class PropertyFilters extends React.Component {
	state = {
		minPriceStateOptions: [
			"$300000+",
			"$400000+",
			"$500000+",
			"$600000+",
			"$700000+",
			"$800000+",
			"$900000+",
			"$1000000+"
		],
		maxPriceStateOptions: [
			"$400000",
			"$500000",
			"$600000",
			"$700000",
			"$800000",
			"$900000",
			"$1000000",
			"$1100000"
		],
		minPriceInputSelected: true,
		numBathsValue: "",
		numBedsValue: "",
		minPriceValue: "",
		maxPriceValue: "",
		dropdownStyle: { background: "#fff" }
	};

	handleMinPriceChanged = (e, { price }) => {
		this.props.updateMinPrice({
			...this.props.searchFilters,
			minPrice: price
		});
	};

	handleMaxPriceChanged = (e, { price }) => {
		this.props.updateMaxPrice({
			...this.props.searchFilters,
			maxPrice: price
		});
	};

	handleMinPriceInputClicked = e => {
		this.setState(() => ({ minPriceInputSelected: true }));
		e.stopPropagation();
	};

	handleMaxPriceInputClicked = e => {
		this.setState(() => ({ minPriceInputSelected: false }));
		e.stopPropagation();
	};

	handleNumBedsDropdownClicked = (e, { text }) => {
		this.setState({ numBedsValue: text.toString() });
		this.props.updateMinNumBeds({
			...this.props.searchFilters,
			minNumBeds: text
		});
	};

	handleNumBathsDropdownClicked = (e, { text }) => {
		this.setState({ numBathsValue: text.toString() });
		this.props.updateMinNumBaths({
			...this.props.searchFilters,
			minNumBaths: text
		});
	};

	render() {
		return (
			<div>
				<Grid columns={3}>
					<Grid.Column width="6">
						<DropdownPrice
							stateOptions={
								this.state.minPriceInputSelected === true
									? this.state.minPriceStateOptions
									: this.state.maxPriceStateOptions
							}
							handleMinPriceChanged={this.handleMinPriceChanged}
							handleMaxPriceChanged={this.handleMaxPriceChanged}
							handleMinPriceInputClicked={
								this.handleMinPriceInputClicked
							}
							handleMaxPriceInputClicked={
								this.handleMaxPriceInputClicked
							}
							minPriceInputSelected={
								this.state.minPriceInputSelected
							}
							dropdownStyle={this.state.dropdownStyle}
						/>
					</Grid.Column>
					<Grid.Column width="5">
						<Dropdown
							placeholder="# of Beds"
							text={this.state.numBedsValue}
							fluid
							button
							style={this.state.dropdownStyle}
						>
							<Dropdown.Menu>
								{this.props.stateOptions.map(
									option => (
										<Dropdown.Item
											key={option}
											text={option}
											onClick={
												this
													.handleNumBedsDropdownClicked
											}
										/>
									),
									this
								)}
							</Dropdown.Menu>
						</Dropdown>
					</Grid.Column>
					<Grid.Column width="5">
						<Dropdown
							placeholder="# of Baths"
							text={this.state.numBathsValue}
							fluid
							button
							style={this.state.dropdownStyle}
						>
							<Dropdown.Menu>
								{this.props.stateOptions.map(
									option => (
										<Dropdown.Item
											key={option}
											text={option}
											onClick={
												this
													.handleNumBathsDropdownClicked
											}
										/>
									),
									this
								)}
							</Dropdown.Menu>
						</Dropdown>
					</Grid.Column>
				</Grid>
			</div>
		);
	}
}

const mapStateTopProps = state => ({
	searchFilters: state.search.searchFilters
});

PropertyFilters.propTypes = {
	searchFilters: PropTypes.shape({
		city: PropTypes.string,
		minPrice: PropTypes.string,
		maxPrice: PropTypes.string,
		minNumbBeds: PropTypes.number,
		minNumBaths: PropTypes.number
	}),
	updateMinPrice: PropTypes.func.isRequired,
	updateMaxPrice: PropTypes.func.isRequired,
	updateMinNumBeds: PropTypes.func.isRequired,
	updateMinNumBaths: PropTypes.func.isRequired,
	stateOptions: PropTypes.arrayOf(PropTypes.number).isRequired
};

PropertyFilters.defaultProps = {
	searchFilters: {}
};

export default connect(mapStateTopProps, {
	updateMinPrice,
	updateMaxPrice,
	updateMinNumBeds,
	updateMinNumBaths
})(PropertyFilters);
