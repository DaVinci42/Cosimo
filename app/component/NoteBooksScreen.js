import React, { Component } from "react";
import { View } from "react-native";
import { NavigationBar, Text, Icon, Title, Button } from "@shoutem/ui";

import AppStyle from "../AppStyle";
import NoteManager from "../NoteManager";

export default class NoteBooksScreen extends Component {
	state = {
		bookButtons: []
	};

	buttonFromBook = book => {
		return (
			<Button key={book.path} styleName="sm-gutter">
				<Text>{book.name}</Text>
			</Button>
		);
	};

	didPressedBookButton = book => {
		// DAN'D TODO
	};

	fetchNoteBooks = () => {
		NoteManager.fetchNoteBooks()
			.then(books => {
				let buttons = books.map(book => this.buttonFromBook(book));
				this.setState({
					bookButtons: buttons
				});
			})
			.catch(e => console.log(e));
	};

	componentWillMount() {
		this.fetchNoteBooks();
	}

	render() {
		return (
			<View style={AppStyle.container}>
				<NavigationBar
					styleName="inline"
					leftComponent={
						<Icon name="sidebar" style={AppStyle.leftNavigation} />
					}
					centerComponent={<Title>Note Books</Title>}
				/>

				<View
					style={{
						flex: 1,
						flexDirection: "row",
						alignItems: "flex-start"
					}}
				>
					{this.state.bookButtons}
				</View>
			</View>
		);
	}
}
