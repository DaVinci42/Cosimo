import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { StackNavigator } from "react-navigation";
import { NavigationBar, Icon, Title, Text } from "@shoutem/ui";

import StackRoute from "./AppStackRoute";
import { STACK_ROUTE_NOTE_BOOKS } from "./AppStackRoute";
import AppStyle from "../AppStyle";

export default class DrawerNoteBooksScreen extends Component {
	constructor(props) {
		super(props);

		this.navigationBar = (
			<NavigationBar
				leftComponent={
					<Icon name="sidebar" style={AppStyle.leftNavigation} />
				}
				centerComponent={<Title>Note Books</Title>}
			/>
		);

		this.stackNavigator = StackNavigator(StackRoute, {
			initialRouteName: STACK_ROUTE_NOTE_BOOKS,
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

const styles = StyleSheet.flatten({});
