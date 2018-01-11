import React, { Component } from "react";
import { Button, View, StyleSheet } from "react-native";
import { NavigationBar, Icon, Title, Text } from "@shoutem/ui";

export default class NoteInBookComponent extends Component {
	constructor(props) {
		super(props);

		this.noteBook = props.navigation.state.params.noteBook;
	}

	render() {
		return (
			<NavigationBar
				styleName={"inline"}
				leftComponent={
					<Icon name="sidebar" style={styles.leftNavigation} />
				}
				centerComponent={<Title>{this.noteBook.name}</Title>}
			/>
		);
	}
}

const styles = StyleSheet.flatten({
	container: {
		flex: 1,
		flexDirection: "column",
		alignItems: "stretch",
		backgroundColor: "#F5FCFF"
	},
	leftNavigation: {
		marginLeft: 16,
		marginRight: 16
	},
	booksContainer: {
		flex: 1,
		flexDirection: "row",
		alignItems: "flex-start"
	}
});
