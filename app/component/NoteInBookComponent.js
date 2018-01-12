import React, { Component } from "react";
import { Button, View, StyleSheet } from "react-native";
import { NavigationBar, Icon, Title, Text, ListView } from "@shoutem/ui";
import NoteManager from "../NoteManager";
import { ROUTE_STACK_NOTE_CONTENT } from "./AppStackScreen";

export default class NoteInBookComponent extends Component {
	constructor(props) {
		super(props);

		this.noteBook = props.navigation.state.params.noteBook;

		this.state = {
			notes: []
		};

		this.fetchNotesInBook = (noteBook: NoteBook) => {
			NoteManager.notesInBook(noteBook)
				.then(notes => {
					this.setState({
						notes: notes
					});
				})
				.catch(e => console.log(e));
		};
		this.didPressedNote = (note: Note) => {
			this.props.navigation.navigate(ROUTE_STACK_NOTE_CONTENT, {
				note: note
			});
		};

		this.fetchNotesInBook(this.noteBook);
	}

	renderRow(note: Note) {
		return <Button onPress={this.didPressedNote(note)} title={note.name} />;
	}

	render() {
		return (
			<View style={styles.container}>
				<NavigationBar
					styleName={"inline"}
					leftComponent={
						<Icon name="sidebar" style={styles.leftNavigation} />
					}
					centerComponent={<Title>{this.noteBook.name}</Title>}
				/>
				<ListView data={this.state.notes} renderRow={this.renderRow} />
			</View>
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
