import React, { Component } from "react";
import { Button, View, StyleSheet } from "react-native";
import { NavigationBar, Icon, Title, Text } from "@shoutem/ui";

export const NOTE_LIST = "Note List";

export default class NodeListComponent extends Component {
	static navigationOptions = {
		drawerLabel: NOTE_LIST
	};

	render() {
		return (
			<View style={styles.container}>
				<NavigationBar
					leftComponent={
						<Icon name="sidebar" style={styles.leftNavigation} />
					}
					centerComponent={<Title>{NOTE_LIST}</Title>}
				/>
				<Text>Notes Info</Text>
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
