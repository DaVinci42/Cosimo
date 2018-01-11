import React, { Component } from "react";
import { Button, View, StyleSheet } from "react-native";
import { NavigationBar, Icon, Title, Text } from "@shoutem/ui";

import { ROUTE_NOTE_BY_BOOK } from "../Constant";

export default class NotesByBook extends Component {
	static navigationOptions = {
		drawerLabel: ROUTE_NOTE_BY_BOOK
	};

	render() {
		return (
			<View style={styles.container}>
				<NavigationBar
					leftComponent={
						<Icon name="sidebar" style={styles.leftNavigation} />
					}
					centerComponent={<Title>{ROUTE_NOTE_BY_BOOK}</Title>}
				/>
				<Text>{ROUTE_NOTE_BY_BOOK}</Text>
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
