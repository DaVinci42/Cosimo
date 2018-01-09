import React, { Component } from "react";
import { Button, View, StyleSheet } from "react-native";
import { NavigationBar, Icon, Title, Text } from "@shoutem/ui";

export const NOTE_BOOK_LIST = "Note Book List";

export default class NodeBookListComponent extends Component {
	static navigationOptions = {
		drawerLabel: NOTE_BOOK_LIST
	};

	render() {
		return (
			<View style={styles.container}>
				<NavigationBar
					leftComponent={
						<Icon name="sidebar" style={styles.leftNavigation} />
					}
					centerComponent={<Title>{NOTE_BOOK_LIST}</Title>}
				/>
				<Text>NoteBooks Info</Text>
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
