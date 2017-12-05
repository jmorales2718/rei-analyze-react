import React from "react";
import PropTypes from "prop-types";
import {
	Image,
	Container,
	Button,
	Header,
	Grid,
	Icon
} from "semantic-ui-react";
import { connect } from "react-redux";

import * as logoLight from "../../images/rei-analyze-logo-light.png";
import StickyMenu from "../menus/StickyMenu";
import wrappedJumbotron from "../menus/WrappedJumbotron";
import * as actions from "../../actions/auth";

const WrappedJumbotron = StickyMenu(wrappedJumbotron, this.scrollTop);

const HomePageContents = ({ isAuthenticated, logout }) => (
	<div id="top">
		<WrappedJumbotron isAuthenticated={isAuthenticated} logout={logout} />
		<Container style={{ padding: "100px" }}>
			<Container text>
				<Header
					as="h1"
					textAlign="center"
					content="What is REI Analyze?"
					style={{ color: "#333" }}
				/>
				<p
					style={{
						color: "#757575",
						textAlign: "center",
						padding: "30px 0"
					}}
				>
					REI Analyze is a tool built for real estate investors to
					help them find and analyze properties easier and faster than
					ever.
				</p>
			</Container>
			<Container style={{ padding: "20px 0" }}>
				<Header
					as="h3"
					textAlign="center"
					content="Get started in 3 easy steps"
					style={{ color: "#333", padding: "30px 0" }}
				/>
				<Grid columns={3} stackable>
					<Grid.Column style={{ textAlign: "center" }}>
						<Icon name="keyboard" size="huge" color="grey" />
						<Header
							as="h3"
							textAlign="center"
							content="1. Type a Location"
							style={{ color: "#757575" }}
						/>
						<p
							style={{
								color: "#757575",
								padding: "10px 0"
							}}
						>
							Type in a market that you want to look at properties
							in and press search. Then we will show you results
							taken straight from Zillow to analyze and purchase.
						</p>
					</Grid.Column>
					<Grid.Column style={{ textAlign: "center" }}>
						<Icon name="mouse pointer" size="huge" color="grey" />
						<Header
							as="h3"
							textAlign="center"
							content="2. Select a Property"
							style={{ color: "#757575" }}
						/>
						<p
							style={{
								color: "#757575",
								padding: "10px 0"
							}}
						>
							Look through the search results and find a property
							that you think will be a good investment. Then click
							analyze to determine how good of an investment it
							is.
						</p>
					</Grid.Column>
					<Grid.Column style={{ textAlign: "center" }}>
						<Icon name="unhide" size="huge" color="grey" />
						<Header
							as="h3"
							textAlign="center"
							content="3. Analyze the Investment"
							style={{ color: "#757575" }}
						/>
						<p
							style={{
								color: "#757575",
								padding: "10px 0"
							}}
						>
							Fill out information about the property (we&apos;ll
							have filled some for you already), income, expenses
							and debt service. Then look at the results to find
							out if it&apos;s a good opportunity.
						</p>
					</Grid.Column>
				</Grid>
			</Container>
		</Container>
		<Container
			fluid
			style={{ backgroundColor: "#2185d0", padding: "75px 0" }}
		>
			<Container>
				<Grid columns={2} stackable doubling>
					<Grid.Column width={10}>
						<Header
							as="h1"
							textAlign="center"
							content="Ready to Analyze your first deal with us?"
							style={{
								color: "white",
								lineHeight: "2.1em"
							}}
						/>
					</Grid.Column>
					<Grid.Column width={6}>
						<Container fluid textAlign="center">
							<Button
								size="large"
								content="Get Started"
								inverted
								onClick={this.handleCTAClick}
								style={{
									fontSize: "1.75em",
									padding: ".5em 1.25em"
								}}
							/>
						</Container>
					</Grid.Column>
				</Grid>
			</Container>
		</Container>
		<Container fluid style={{ backgroundColor: "#333", padding: "75px 0" }}>
			<Container>
				<Image size="small" href="/" src={logoLight} float="left" />
				<Header
					as="h5"
					floated="right"
					style={{ color: "#757575", lineHeight: "3em" }}
				>
					© 2017 REI Analyze - All Rights Reserved
				</Header>
			</Container>
		</Container>
	</div>
);

function mapStateToProps(state) {
	return {
		isAuthenticated: !!state.user.token
	};
}

HomePageContents.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	logout: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { logout: actions.logout })(
	HomePageContents
);
