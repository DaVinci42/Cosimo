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
		this.props.navigation.navigate(STACK_ROUTE_NOTES_IN_BOOK);
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
					centerComponent={<Title>{title}</Title>}
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
