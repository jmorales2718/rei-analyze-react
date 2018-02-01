import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Menu, Container, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import * as actions from "../../actions/auth";
import * as logoDark from "../../images/rei-analyze-logo-dark.png";

const FixedMenu = ({ isAuthenticated, logout }) => (
	<Menu fluid borderless fixed="top" size="large" style={{ borderRadius: 0 }}>
		<Container fluid>
			<Menu.Item>
				<Image size="small" href="/" src={logoDark} />
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
);

FixedMenu.propTypes = {
	logout: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
	isAuthenticated: !!state.user.token
});

export default connect(mapStateToProps, { logout: actions.logout })(FixedMenu);
