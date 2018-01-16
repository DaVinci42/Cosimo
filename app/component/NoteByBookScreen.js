import React, { Component } from "react";
import { View } from "react-native";
import { Text, NavigationBar, Icon, Title } from "@shoutem/ui";

import AppStyle from "../AppStyle";

export default class NoteByBookScreen extends Component {
	render() {
		return (
			<View style={AppStyle.container}>
				<NavigationBar
					styleName="inline"
					leftComponent={
						<Icon name="sidebar" style={AppStyle.leftNavigation} />
					}
					centerComponent={<Title>Note By Book</Title>}
				/>
				<Text style={{ flex: 1, textAlign: "center" }}>
					Note By Book
				</Text>
			</View>
		);
	}
}
