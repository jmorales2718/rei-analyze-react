import React from "react";
import { Visibility } from "semantic-ui-react";
import FixedMenu from "../menus/FixedMenu";

const StickyMenuWrap = (WrappedComponent, scrollTop) => {
	class StickyMenu extends React.Component {
		state = {};

		hideFixedMenu = () => this.setState({ visible: false });
		showFixedMenu = () => this.setState({ visible: true });

		render() {
			const { visible } = this.state;
			return (
				<div>
					{!visible || scrollTop === 0 ? null : <FixedMenu />}
					{/* visible ? <FixedMenu /> : null */}

					<Visibility
						onBottomPassed={this.showFixedMenu}
						onBottomVisible={this.hideFixedMenu}
						once={false}
					>
						<div>
							<WrappedComponent {...this.props} />
						</div>
					</Visibility>
				</div>
			);
		}
	}
	return StickyMenu;
};

export default StickyMenuWrap;
