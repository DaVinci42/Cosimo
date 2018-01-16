import React, { Component } from "react";
import LottieView from "lottie-react-native";

import { STACK_ROUTE_DRAWER } from "./AppStackScreen";

export default class SplashScreen extends Component {
	mixins: [TimerMixin];

	componentDidMount() {
		this.animation.play();

		this.timer = setTimeout(() => {
			this.props.navigation.navigate(STACK_ROUTE_DRAWER);
			clearTimeout(this.timer);
		}, 2000);
	}

	componentWillUnmount() {
		this.animation.stop();
	}

	render() {
		return (
			<LottieView
				ref={animation => {
					this.animation = animation;
				}}
				source={require("../asset/empty_status.json")}
			/>
		);
	}
}
