import React, { Component } from "react";
import { View } from "react-native";
import { Text } from "@shoutem/ui";

import AppStyle from "../AppStyle";

export default class SettingScreen extends Component {
	render() {
		return (
			<View style={AppStyle.container}>
				<Text>SettingScreen</Text>
			</View>
		);
	}
}
