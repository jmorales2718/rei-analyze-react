import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Menu, Dropdown, Image } from "semantic-ui-react";
import * as actions from "../../actions/auth";

const TopNavigation = ({ logout }) => (
	<div>
		<Menu secondary pointing>
			<Menu.Item as={Link} to="/dashboard">
				Dashboard
			</Menu.Item>
			<Menu.Menu position="right">
				{/* TODO: download a stock image picture and use it instead */}
				<Dropdown
					trigger={
						<Image
							avatar
							src="http://www.lvsv-brussel.be/wp-content/uploads/2016/09/geen-foto-2-300x300.jpg"
						/>
					}
				>
					<Dropdown.Menu>
						<Dropdown.Item onClick={() => logout()}>
							Logout
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Menu.Menu>
		</Menu>
	</div>
);

TopNavigation.propTypes = {
	logout: PropTypes.func.isRequired
};

export default connect(null, { logout: actions.logout })(TopNavigation);
