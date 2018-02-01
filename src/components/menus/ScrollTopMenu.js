import React from "react";
import PropTypes from "prop-types";
import { Visibility } from "semantic-ui-react";
import FixedMenu from "./FixedMenu";

const ScrollTopMenu = WrappedComponent => {
	class JumbotronWrapped extends React.Component {
		state = {
			visible: false
		};

		hideFixedMenu = () => this.setState({ visible: false });
		showFixedMenu = () => this.setState({ visible: true });

		render() {
			const { visible } = this.state;
			const { scrollTop } = this.props;
			return (
				<div>
					{!visible || scrollTop === 0 ? null : <FixedMenu />}

					<Visibility
						onBottomPassed={this.showFixedMenu}
						onBottomVisible={this.hideFixedMenu}
						once={false}
					>
						<WrappedComponent {...this.props} />
					</Visibility>
				</div>
			);
		}
	}

	JumbotronWrapped.propTypes = {
		scrollTop: PropTypes.bool.isRequired
	};

	return JumbotronWrapped;
};

export default ScrollTopMenu;
