import React, { Component } from "react";
import PropTypes from "prop-types";
import { Dropdown, Input, Grid } from "semantic-ui-react";
import InlineError from "../messages/InlineError";

class DropdownPrice extends Component {
	state = {
		minPriceValue: "",
		maxPriceValue: "",
		fullPriceValue: "",
		textAlignLeft: { textAlign: "left" },
		textAlignRight: { textAlign: "right" },
		errors: {},
		open: false
	};

	onMinPriceChange = (e, { value }) => {
		const errors = this.validate(value);
		this.setState(() => ({
			errors
		}));
		if (Object.keys(errors).length === 0) {
			this.setState(() => ({
				minPriceValue: value.toString()
			}));
			this.props.handleMinPriceChanged(e, { price: value });
		} else if (errors.empty) {
			this.setState(() => ({ minPriceValue: "" }));
			this.props.handleMinPriceChanged(e, { price: "" });
		}
	};

	onMaxPriceChange = (e, { value }) => {
		const errors = this.validate(value);
		this.setState(() => ({
			errors
		}));
		if (Object.keys(errors).length === 0) {
			this.setState(() => ({
				maxPriceValue: value
			}));
			this.props.handleMaxPriceChanged(e, { price: value });
		} else if (errors.empty) {
			this.setState(() => ({ maxPriceValue: "" }));
			this.props.handleMaxPriceChanged(e, { price: "" });
		}
	};

	handleDropdownOpen = () => {
		this.setState(() => ({ open: true }));
	};

	// Handles event where dropdown closed
	handleDropdownClosed = () => {
		this.setState(() => ({ open: false }));
		const validatedFullPrice = this.validateFullPrice();
		if (
			Object.keys(validatedFullPrice).length === 0 &&
			validatedFullPrice.constructor === Object
		) {
			this.setState(() => ({
				fullPriceValue: ""
			}));
		} else if (validatedFullPrice) {
			this.setState(() => ({
				fullPriceValue: validatedFullPrice
			}));
		}
	};

	validate = value => {
		const errors = {};
		if (isNaN(value)) errors.price = "Price must be a whole number";
		if (value.length === 0) errors.empty = "Price must not be empty";
		return errors;
	};

	// sets the value of the selected input with the value of the item that was clicked
	handleDropdownItemClicked = (e, { text }) => {
		if (this.props.minPriceInputSelected) {
			const price = text.substring(1, text.length - 1);
			this.setState({ minPriceValue: price });
			this.props.handleMinPriceChanged(e, { price });
			e.stopPropagation();
		} else {
			const price = text.substring(1, text.length);
			this.setState({ maxPriceValue: price });
			this.props.handleMaxPriceChanged(e, { price });
			e.stopPropagation();
		}
	};

	// If correct return full price string, if errors set state of errors and return empty object.
	validateFullPrice = () => {
		const errors = {};
		if (this.state.minPriceValue && this.state.maxPriceValue) {
			if (this.state.minPriceValue > this.state.maxPriceValue) {
				this.setState(() => ({
					errors: {
						price: "Max price must be larger than min price"
					},
					open: true
				}));
				return errors;
			}
			this.setState({ errors: {} });
			return `$${this.state.minPriceValue} - $${
				this.state.maxPriceValue
			}`;
		} else if (this.state.minPriceValue && this.state.minPriceValue !== 0) {
			this.setState({ errors: {} });
			return `$${this.state.minPriceValue}+`;
		} else if (this.state.maxPriceValue && this.state.maxPriceValue !== 0) {
			this.setState({ errors: {} });
			return `Up to $${this.state.maxPriceValue}`;
		}
		return errors;
	};

	render() {
		return (
			<Dropdown
				placeholder="Price"
				text={this.state.fullPriceValue}
				open={this.state.open}
				fluid
				button
				onOpen={this.handleDropdownOpen}
				onClose={this.handleDropdownClosed}
				style={this.props.dropdownStyle}
			>
				<Dropdown.Menu style={{ width: "100%" }}>
					<Grid columns={2} padded>
						<Grid.Row
							styles={{
								padding: 0
							}}
						>
							<Grid.Column width="7">
								<Input
									placeholder="Min Price"
									size="tiny"
									fluid
									value={this.state.minPriceValue}
									onChange={this.onMinPriceChange}
									onClick={
										this.props.handleMinPriceInputClicked
									}
								/>
							</Grid.Column>
							<Grid.Column width="2">
								<h1 styles={{ textAlign: "center" }}>-</h1>
							</Grid.Column>
							<Grid.Column width="7">
								<Input
									placeholder="Max Price"
									size="tiny"
									fluid
									value={this.state.maxPriceValue}
									onChange={this.onMaxPriceChange}
									onClick={
										this.props.handleMaxPriceInputClicked
									}
								/>
							</Grid.Column>
						</Grid.Row>
						{this.state.errors.price && (
							<InlineError text={this.state.errors.price} />
						)}
					</Grid>
					<Dropdown.Divider />
					{this.props.stateOptions.map(
						option => (
							<Dropdown.Item
								text={option}
								key={option}
								onClick={this.handleDropdownItemClicked}
								style={
									this.props.minPriceInputSelected
										? this.state.textAlignLeft
										: this.state.textAlignRight
								}
							/>
						),
						this
					)}
				</Dropdown.Menu>
			</Dropdown>
		);
	}
}

DropdownPrice.propTypes = {
	stateOptions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
	handleMinPriceChanged: PropTypes.func.isRequired,
	handleMaxPriceChanged: PropTypes.func.isRequired,
	handleMinPriceInputClicked: PropTypes.func.isRequired,
	handleMaxPriceInputClicked: PropTypes.func.isRequired,
	minPriceInputSelected: PropTypes.bool.isRequired,
	dropdownStyle: PropTypes.shape({
		background: PropTypes.string.isRequired
	}).isRequired
};

export default DropdownPrice;
