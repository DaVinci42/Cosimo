import React, { Component } from "react";
import { View } from "react-native";
import { NavigationBar, Text, Icon, Title } from "@shoutem/ui";

import AppStyle from "../AppStyle";

export default class NoteBooksScreen extends Component {
	render() {
		return (
			<View style={AppStyle.container}>
				<NavigationBar
					leftComponent={
						<Icon name="sidebar" style={AppStyle.leftNavigation} />
					}
					centerComponent={<Title>Note Books</Title>}
				/>
				<Text>Note Books</Text>
			</View>
		);
	}
}
