import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationBar, Icon, Title, Text } from "@shoutem/ui";
import { StackNavigator } from "react-navigation";

import { STACK_ROUTE_NOTE_BY_BOOK } from "./AppStackRoute";
import AppStyle from "../AppStyle";

export default class DrawerNoteByBookScreen extends Component {
	constructor(props) {
		super(props);

		this.navigationBar = (
			<NavigationBar
				leftComponent={
					<Icon name="sidebar" style={AppStyle.leftNavigation} />
				}
				centerComponent={<Title>Note By Book</Title>}
			/>
		);

		this.stackNavigator = StackNavigator(StackRoute, {
			initialRouteName: STACK_ROUTE_NOTE_BY_BOOK,
			headerMode: "none"
		});
	}

	render() {
		return (
			<View style={AppStyle.container}>
				{this.navigationBar}
				<this.stackNavigator />
			</View>
		);
	}
}

