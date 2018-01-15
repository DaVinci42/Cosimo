import React, { Component } from "react";
import { View } from "react-native";
import { Text } from "@shoutem/ui";

import AppStyle from "../AppStyle";

export default class SettingComponent extends Component {
	render() {
		console.log("SettingComponent rendered");

		return (
			<View style={AppStyle.container}>
				<Text>Setting</Text>
				<Text>List</Text>
			</View>
		);
	}
}
