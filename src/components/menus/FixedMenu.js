import React from "react";
import { Menu, Container, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import * as logoDark from "../../images/rei-analyze-logo-dark.png";

const FixedMenu = () => (
	<Menu fluid borderless fixed="top" size="large" style={{ borderRadius: 0 }}>
		<Container>
			<Menu.Item>
				<Image size="small" href="/" src={logoDark} />
			</Menu.Item>
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
		</Container>
	</Menu>
);

export default FixedMenu;
