import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Menu, Container, Image, Button } from "semantic-ui-react";
import * as logoDark from "../../images/rei-analyze-logo-dark.png";
import * as actions from "../../actions/auth";

const SimpleMenu = ({ isAuthenticated, logout }) => (
	<div>
		<Menu fluid borderless size="large" style={{ borderRadius: 0 }}>
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
	</div>
);

const mapStateToProps = state => ({
	isAuthenticated: !!state.user.token
});

SimpleMenu.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	logout: PropTypes.func.isRequired
};
export default connect(mapStateToProps, { logout: actions.logout })(SimpleMenu);
