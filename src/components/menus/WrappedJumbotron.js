import React from "react";
import PropTypes from "prop-types";
import { Menu, Container, Image, Button, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import * as headerBackground from "../../images/home-main-background-image.jpg";
import * as logoLight from "../../images/rei-analyze-logo-light.png";
import SearchBox from "../searches/SearchBox";

const WrappedJumbotron = ({ isAuthenticated, logout }) => (
	<div>
		<Menu
			fluid
			borderless
			size="large"
			style={{
				borderRadius: 0,
				marginBottom: -150,
				backgroundColor: "rgba(255, 255, 255, 0)"
			}}
		>
			<Container>
				<Menu.Item>
					<Image
						size="medium"
						href="/"
						src={logoLight}
						style={{ width: 250 }}
					/>
				</Menu.Item>
				{!isAuthenticated ? (
					<Menu.Menu position="right">
						<Menu.Item className="item">
							<Button as={Link} to="/login">
								Log in
							</Button>
						</Menu.Item>
						<Menu.Item>
							<Button as={Link} to="/signup" primary>
								Sign Up
							</Button>
						</Menu.Item>
					</Menu.Menu>
				) : (
					<Menu.Menu position="right">
						<Menu.Item>
							<Button
								as={Link}
								to="/"
								primary
								onClick={() => logout()}
							>
								Log out
							</Button>
						</Menu.Item>
					</Menu.Menu>
				)}
			</Container>
		</Menu>
		<Container
			fluid
			style={{
				backgroundImage: `url(${headerBackground})`,
				backgroundSize: "cover"
			}}
		>
			<Container
				fluid
				style={{
					backgroundColor: "rgba(0,0,0,.5)",
					padding: "23% 0"
				}}
			>
				<Container>
					<Header
						as="h1"
						textAlign="center"
						content="Get an Amazing Return on Your Next Investment"
						inverted
						style={{
							color: "white",
							fontSize: "3em",
							fontWeight: "normal",
							marginBottom: 20
						}}
					/>
					<Container text id="searchContainer">
						<SearchBox />
					</Container>
				</Container>
			</Container>
		</Container>
	</div>
);

WrappedJumbotron.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	logout: PropTypes.func.isRequired
};

export default WrappedJumbotron;
