import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationBar, Icon, Title, Text, Button } from "@shoutem/ui";

const title = "Note By Boooks";
export default class NotesByBook extends Component {
	render() {
		return (
			<View style={styles.container}>
				<NavigationBar
					leftComponent={
						<Icon name="sidebar" style={styles.leftNavigation} />
					}
					centerComponent={<Title>{title}</Title>}
				/>

				<Text>{title}</Text>
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
