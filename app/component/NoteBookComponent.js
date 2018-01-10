import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationBar, Icon, Title, Text, Button } from "@shoutem/ui";
import NoteBook from "../bean/NoteBook";
import NoteManager from "../NoteManager";

export const NOTE_BOOKS = "Note Books";

export default class NodeBookComponent extends Component {
	static navigationOptions = {
		drawerLabel: NOTE_BOOKS
	};

	constructor(props) {
		super(props);

		this.state = {
			bookButtons: []
		};

		this.fetchNoteBooks = this.fetchNoteBooks.bind(this);
		this.buttonFromNoteBook = this.buttonFromNoteBook.bind(this);
		this.noteBookDidPressed = this.noteBookDidPressed.bind(this);

		this.fetchNoteBooks();
	}

	fetchNoteBooks(): void {
		NoteManager.listNoteBooks()
			.then(noteBooks => {
				this.setState({
					bookButtons: noteBooks
						// manully add ALL at the end
						.concat(new NoteBook("ALL", ""))
						.map(book => this.buttonFromNoteBook(book))
				});
			})
			.catch(e => console.log(e));
	}

	buttonFromNoteBook(book: NoteBook): Button {
		return (
			<Button
				onPress={() => this.noteBookDidPressed(book)}
				styleName="sm-gutter"
				key={book.path}
			>
				<Text>{book.name}</Text>
			</Button>
		);
	}

	noteBookDidPressed(noteBook: NoteBook): void {
		// DAN'S TODO: navigate
		console.log(noteBook.name);
	}

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
				<View style={styles.booksContainer}>
					{this.state.bookButtons}
				</View>
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
