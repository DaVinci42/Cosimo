import React, { Component } from "react";
import { View } from "react-native";
import { NavigationBar, Text, Icon, Title, Button } from "@shoutem/ui";

import AppStyle from "../AppStyle";
import NoteManager from "../NoteManager";
import AppStackScreen, { STACK_ROUTE_NOTES_IN_BOOK } from "./AppStackScreen";

const title = "Note Books";

export default class NoteBooksScreen extends Component {
	static navigationOptions = {
		drawerLabel: title
	};

	state = {
		bookButtons: []
	};

	componentWillMount() {
		this.fetchNoteBooks();
	}

	buttonFromBook = book => {
		return (
			<Button
				key={book.path}
				styleName="sm-gutter"
				onPress={() => this.didPressedBookButton(book)}
			>
				<Text>{book.name}</Text>
			</Button>
		);
	};

	didPressedBookButton = book => {
		this.props.navigation.navigate(STACK_ROUTE_NOTES_IN_BOOK, {
			book: book
		});
	};

	fetchNoteBooks = () => {
		NoteManager.noteBooks()
			.then(books => {
				let buttons = books.map(book => this.buttonFromBook(book));
				this.setState({
					bookButtons: buttons
				});
			})
			.catch(e => console.log(e));
	};

	render() {
		return (
			<View style={AppStyle.container}>
				<NavigationBar
					styleName="inline"
					leftComponent={
						<Icon name="sidebar" style={AppStyle.leftNavigation} />
					}
					centerComponent={<Title>{title}</Title>}
				/>

				<View style={AppStyle.noteBooks}>{this.state.bookButtons}</View>
			</View>
		);
	}
}
