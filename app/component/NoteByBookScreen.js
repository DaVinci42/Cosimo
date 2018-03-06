import React, { Component } from "react";
import { View, BackHandler, SectionList } from "react-native";
import {
	Text,
	NavigationBar,
	Icon,
	Title,
	Button,
	Caption,
	Divider
} from "@shoutem/ui";

import AppStyle from "../AppStyle";
import NoteManager from "../NoteManager";
import {
	STACK_ROUTE_NOTES_IN_BOOK,
	STACK_ROUTE_NOTE_CONTENT
} from "./AppStackScreen";

const title = "Note By Book";

const kAppDrawerBackListener = "kAppDrawerBackListener";

export default class NoteByBookScreen extends Component {
	static navigationOptions = {
		drawerLabel: title
	};

	constructor(props) {
		super(props);

		this.state = {
			sections: []
		};
	}

	// backHandler = () => {
	// 	BackHandler.exitApp();
	// 	return true;
	// };

	componentWillMount() {
		// BackHandler.addEventListener(kAppDrawerBackListener, this.backHandler);
		this.fetchNotesByBook();
	}

	// componentWillUnmount() {
	// 	BackHandler.removeEventListener(
	// 		kAppDrawerBackListener,
	// 		this.backHandler
	// 	);
	// }

	fetchNotesByBook = () => {
		NoteManager.notesByBook()
			.then(noteArray => {
				this.setState({
					sections: noteArray
				});
			})
			.catch(e => console.log(e));
	};

	didPressedNote = note => {
		this.props.navigation.navigate(STACK_ROUTE_NOTE_CONTENT, {
			note: note
		});
	};

	didPressedNoteBook = book => {
		console.log("didPressedNoteBook: ", book);
		this.props.navigation.navigate(STACK_ROUTE_NOTES_IN_BOOK, {
			book: book
		});
	};

	renderItem = ({ item }) => {
		return (
			<Button
				style={AppStyle.noteContainer}
				onPress={() => this.didPressedNote(item)}
			>
				<Title
					style={AppStyle.noteTitle}
					styleName="sm-gutter md-gutter-left"
				>
					{item.name}
				</Title>
				<Caption
					style={AppStyle.noteTime}
					styleName="sm-gutter md-gutter-right"
				>
					{NoteManager.timeDescFromDate(item.updateTime)}
				</Caption>
			</Button>
		);
	};

	renderSectionHeader = ({ section }) => {
		return (
			<Button
				style={AppStyle.noteContainer}
				onPress={() => this.didPressedNoteBook(section.book)}
			>
				<Text>{section.book.name}</Text>
			</Button>
		);
	};

	renderSectionFooter = ({ section }) => {
		return <Divider styleName="section-header" />;
	};

	itemSeparatorComponent = () => {
		return <Divider styleName="line" />;
	};

	keyExtractor = (item, index) => index;

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
				<SectionList
					renderItem={this.renderItem}
					renderSectionHeader={this.renderSectionHeader}
					sections={this.state.sections}
					keyExtractor={this.keyExtractor}
					ItemSeparatorComponent={this.itemSeparatorComponent}
					renderSectionFooter={this.renderSectionFooter}
				/>
			</View>
		);
	}
}
