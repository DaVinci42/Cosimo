import React, { Component } from "react";
import { View } from "react-native";
import { Text } from "@shoutem/ui";

import AppStyle from "../AppStyle";

export default class NoteByBookScreen extends Component {
	render() {
		return (
			<View style={AppStyle.container}>
				<Text>Note By Book</Text>
			</View>
		);
	}
}
