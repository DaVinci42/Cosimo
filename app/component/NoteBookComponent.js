import React, { Component } from "react";
import { Button, View, StyleSheet } from "react-native";
import {
	NavigationBar,
	Icon,
	Title,
	Text,
	ListView,
	Divider,
	TouchableOpacity
} from "@shoutem/ui";
import NoteBook from "../bean/NoteBook";
import NoteManager from "../NoteManager";

export const NOTE_BOOKS = "Note Books";

export default class NodeBookComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dataSource: []
		};

		NoteManager.listNoteBooks()
			.then(noteBooks => {
				this.setState({
					dataSource: noteBooks
				});
			})
			.catch(e => console.log(e));
	}

	renderRow(noteBook) {
		return (
			<TouchableOpacity>
				<Title>{noteBook.name}</Title>
				<Divider styleName="line" />
			</TouchableOpacity>
		);
	}

	static navigationOptions = {
		drawerLabel: NOTE_BOOKS
	};

	render() {
		return (
			<View style={styles.container}>
				<NavigationBar
					styleName={"inline"}
					leftComponent={
						<Icon name="sidebar" style={styles.leftNavigation} />
					}
					centerComponent={<Title>{NOTE_BOOKS}</Title>}
				/>
				<ListView
					data={this.state.dataSource}
					renderRow={this.renderRow}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.flatten({
	container: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "stretch",
		backgroundColor: "#F5FCFF"
	},
	leftNavigation: {
		marginLeft: 16,
		marginRight: 16
	}
});
