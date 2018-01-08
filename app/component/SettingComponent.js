import React, { Component } from "react";
import { Text, Button, View, StyleSheet } from "react-native";
import AppStatusBar from "./AppStatusBar";
import { NavigationBar, Icon, Title } from "@shoutem/ui";

export const SETTING = "Setting";

export default class SettingComponent extends Component {
	static navigationOptions = {
		drawerLabel: SETTING
	};

	render() {
		return (
			<View style={styles.container}>
				<AppStatusBar />
				<NavigationBar
					leftComponent={
						<Icon name="back" style={styles.leftNavigation} />
					}
					centerComponent={<Title>{SETTING}</Title>}
				/>
				<Text>Setting Items Show Here</Text>
			</View>
		);
	}
}

const styles = StyleSheet.flatten({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F5FCFF"
	},
	leftNavigation: {
		marginLeft: 16,
		marginRight: 16
	}
});
