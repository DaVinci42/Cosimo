import React, { Component } from "react";
import { StackNavigator } from "react-navigation";

import NoteByBookComponent from "./NoteByBookComponent";
import NoteBooksComponent from "./NoteBooksComponent";
import NoteInBookComponent from "./NoteInBookComponent";
import NoteContentComponent from "./NoteContentComponent";
import {
	ROUTE_DRAWER_NOTE_BY_BOOK,
	ROUTE_DRAWER_NOTE_BOOKS
} from "./AppDrawerNavigator";

const ROUTE_STACK_NOTE_BY_BOOK = "ROUTE_STACK_NOTE_BY_BOOK";
const ROUTE_STACK_NOTE_BOOKS = "ROUTE_STACK_NOTE_BOOKS";
const ROUTE_STACK_NOTE_IN_BOOK = "ROUTE_STACK_NOTE_IN_BOOK";
const ROUTE_STACK_NOTE_CONTENT = "ROUTE_STACK_NOTE_CONTENT";

const route = {
	ROUTE_STACK_NOTE_BY_BOOK: {
		screen: NoteByBookComponent
	},
	ROUTE_STACK_NOTE_BOOKS: {
		screen: NoteBooksComponent
	}
	// ROUTE_STACK_NOTE_IN_BOOK: {
	// 	screen: NoteInBookComponent
	// },
	// ROUTE_STACK_NOTE_CONTENT: {
	// 	screen: NoteContentComponent
	// }
};

const NoteByBookStackNavigator = StackNavigator(route, {
	initialRouteName: "ROUTE_STACK_NOTE_BY_BOOK",
	headerMode: "none"
});

const NoteBooksStackNavigator = StackNavigator(route, {
	initialRouteName: "ROUTE_STACK_NOTE_BOOKS",
	headerMode: "none"
});

class NoteByBookScreen extends Component {
	static navigationOptions = {
		drawerLabel: "Note By Books"
	};

	render() {
		return <NoteByBookStackNavigator />;
	}
}

class NoteBooksScreen extends Component {
	static navigationOptions = {
		drawerLabel: "Note Books"
	};

	render() {
		return <NoteBooksStackNavigator />;
	}
}

export { NoteByBookScreen, NoteBooksScreen };

export {
	ROUTE_STACK_NOTE_BY_BOOK,
	ROUTE_STACK_NOTE_BOOKS,
	ROUTE_STACK_NOTE_IN_BOOK,
	ROUTE_STACK_NOTE_CONTENT
};
