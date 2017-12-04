import React from "react";
import PropTypes from "prop-types";
import { Card, Button, Image, Grid, Header } from "semantic-ui-react";

class PropertyCard extends React.Component {
	state = {};

	render() {
		return (
			<Card centered>
				<Grid columns={3}>
					<Grid.Column width="6">
						<Image src={this.props.property.image} />
						<Button onClick={this.onClick}>Analyze Property</Button>
					</Grid.Column>
					<Grid.Column width="6">
						<Header as="h2" color="blue">
							{this.props.property.address}
						</Header>
						<Header as="h4">{this.props.property.city}</Header>
						<p>{this.props.property.description}</p>
					</Grid.Column>
					<Grid.Column width="64">
						<Grid columns={2}>
							<Grid.Column>
								<p className="bolded">Price:</p>
								<p className="bolded">Property Type:</p>
								<p className="bolded">Number of Units:</p>
								<p className="bolded">Building Size:</p>
							</Grid.Column>
							<Grid.Column>
								<p>{this.props.property.price}</p>
								<p>{this.props.property.type}</p>
								<p>{this.props.property.numUnits}</p>
								<p>{this.props.property.buildingSize}</p>
							</Grid.Column>
						</Grid>
					</Grid.Column>
				</Grid>
			</Card>
		);
	}
}

PropertyCard.propTypes = {
	property: PropTypes.shape({
		image: PropTypes.string.isRequired,
		address: PropTypes.string.isRequired,
		city: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		type: PropTypes.string.isRequired,
		numUnits: PropTypes.number.isRequired,
		buildingSize: PropTypes.number.isRequired
	}).isRequired
};

export default PropertyCard;
