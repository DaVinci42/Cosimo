import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationBar, Icon, Title, Text } from "@shoutem/ui";

export default class DrawerNoteByBookScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			navigationBar: (
				<NavigationBar
					leftComponent={
						<Icon name="sidebar" style={styles.leftNavigation} />
					}
					centerComponent={<Title>Note By Book</Title>}
				/>
			)
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<NavigationBar
					leftComponent={
						<Icon name="sidebar" style={styles.leftNavigation} />
					}
					centerComponent={<Title>Note By Book</Title>}
				/>
				<Text>Drawer Note By Book Stack Component</Text>
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
