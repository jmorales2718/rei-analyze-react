import React from "react";
import HomePageContents from "../contents/HomePageContents";

class HomePage extends React.Component {
	state = {
		scrollTop: false
	};

	handleCTAClick = () => {
		this.setState({ scrollTop: true });
		window.scrollTo(0, 0);
	};

	render() {
		return <HomePageContents />;
	}
}

export default HomePage;
