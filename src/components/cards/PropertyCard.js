import React from "react";
import PropTypes from "prop-types";
import { Card, Button, Image, Grid, Header } from "semantic-ui-react";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

class PropertyCard extends React.Component {
	state = {};

	render() {
		const {
			image,
			address,
			city,
			description,
			price,
			numBeds,
			numBaths,
			squareFeet
		} = this.props.property;
		return (
			<Card
				centered
				style={{ width: "90%", margin: "1rem auto", padding: ".5rem" }}
			>
				<Grid columns={2}>
					<Grid.Column width="6">
						{image ? (
							<Image src={image} />
						) : (
							<Image src="http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png" />
						)}
						<Button
							primary
							onClick={this.onClick}
							style={{
								marginTop: ".5rem",

								width: "100%"
							}}
						>
							Analyze Property
						</Button>
					</Grid.Column>
					<Grid.Column width="10">
						<Header as="h2" color="blue">
							{capitalizeFirstLetter(address)}
						</Header>
						<Header as="h4">{capitalizeFirstLetter(city)}</Header>
						<Grid columns={2}>
							<Grid.Column width="10">
								<p>{description}</p>
							</Grid.Column>
							<Grid.Column width="6">
								<Grid columns={2}>
									<Grid.Column>
										<p>
											<strong>Price:</strong>
										</p>
										<p>
											<strong>&#35; of Beds:</strong>
										</p>
										<p>
											<strong>&#35; of Baths:</strong>
										</p>
										<p>
											<strong>Square Feet:</strong>
										</p>
									</Grid.Column>
									<Grid.Column>
										<p>${price}</p>
										<p>{numBeds}</p>
										<p>{numBaths}</p>
										<p>{squareFeet} sf</p>
									</Grid.Column>
								</Grid>
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
		image: PropTypes.string,
		address: PropTypes.string.isRequired,
		city: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		numBeds: PropTypes.number.isRequired,
		numBaths: PropTypes.number.isRequired,
		squareFeet: PropTypes.number.isRequired
	}).isRequired
};

export default PropertyCard;
