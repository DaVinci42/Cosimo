import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationBar, Icon, Title, Text } from "@shoutem/ui";
import { StackNavigator } from "react-navigation";

import { STACK_ROUTE_SETTING } from "./AppStackRoute";

import AppStyle from "../AppStyle";

import SettingComponent from "./SettingComponent";

const SettingStackNavigator = StackNavigator(StackRoute, {
	initialRouteName: STACK_ROUTE_SETTING,
	headerMode: "none"
});

export default class DrawerSettingScreen extends Component {
	constructor(props) {
		super(props);

		this.navigationBar = (
			<NavigationBar
				leftComponent={
					<Icon name="sidebar" style={AppStyle.leftNavigation} />
				}
				centerComponent={<Title>Setting</Title>}
			/>
		);
	}

	render() {
		return (
			<View style={AppStyle.container}>
				{this.navigationBar}

				<SettingComponent />
			</View>
		);
	}
}
