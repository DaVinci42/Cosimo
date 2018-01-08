import React, { Component } from "react";
import { StatusBar } from "react-native";

export default class AppStatusBar extends Component {
	render() {
		return <StatusBar backgroundColor="#333333" barStyle="light-content" />;
	}
}
