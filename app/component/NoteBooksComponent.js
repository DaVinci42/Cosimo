import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationBar, Icon, Title, Text, Button } from "@shoutem/ui";

import NoteBook from "../bean/NoteBook";
import NoteManager from "../NoteManager";

import {ROUTE_STACK_NOTE_IN_BOOK} from './AppStackScreen'

const title = "Note Books";
export default class NoteBooksComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			bookButtons: []
		};

		this.fetchNoteBooks = () => {
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
		};

		this.buttonFromNoteBook = (book: NoteBook) => {
			return (
				<Button
					onPress={() => this.noteBookDidPressed(book)}
					styleName="sm-gutter"
					key={book.path}
				>
					<Text>{book.name}</Text>
				</Button>
			);
		};

		this.noteBookDidPressed = (book: NoteBook) => {
			this.props.navigation.navigate(ROUTE_STACK_NOTE_IN_BOOK,{noteBook:book})
		};

		this.fetchNoteBooks();
	}

	render() {
		return (
			<View style={styles.container}>
				<NavigationBar
					styleName={"inline"}
					leftComponent={
						<Icon name="sidebar" style={styles.leftNavigation} />
					}
					centerComponent={<Title>{title}</Title>}
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
