import React, { Component } from "react";
import { View } from "react-native";
import { Text } from "@shoutem/ui";

import AppStyle from "../AppStyle";

const title = "Setting";

export default class SettingScreen extends Component {
	static navigationOptions = {
		drawerLabel: title
	};

	render() {
		return (
			<View style={AppStyle.container}>
				<Text>{title}</Text>
			</View>
		);
	}
}
