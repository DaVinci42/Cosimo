import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import {
	NavigationBar,
	Icon,
	Title,
	Text,
	ListView,
	Button,
	Caption,
	Divider
} from "@shoutem/ui";

import NoteManager from "../NoteManager";
import AppStyle from "../AppStyle";
import { STACK_ROUTE_NOTE_CONTENT } from "./AppStackScreen";

export default class NotesInBookComponent extends Component {
	noteBook = this.props.navigation.state.params.book;

	state = {
		notes: []
	};

	componentWillMount() {
		this.fetchNotesInBook(this.noteBook);
	}

	renderRow = note => {
		return (
			<Button
				style={styles.noteContainer}
				onPress={() => this.didPressedNote(note)}
			>
				<Title
					style={styles.noteTitle}
					styleName="sm-gutter md-gutter-left"
				>
					{note.name}
				</Title>
				<Caption
					style={styles.noteTime}
					styleName="sm-gutter md-gutter-right"
				>
					{NoteManager.timeDescFromDate(note.updateTime)}
				</Caption>
				<Divider styleName="line" />
			</Button>
		);
	};

	fetchNotesInBook = noteBook => {
		NoteManager.notesInBook(noteBook)
			.then(notes => {
				this.setState({
					notes: notes
				});
			})
			.catch(e => console.log(e));
	};

	didPressedNote = note => {
		this.props.navigation.navigate(STACK_ROUTE_NOTE_CONTENT, {
			note: note
		});
	};

	render() {
		return (
			<View style={AppStyle.container}>
				<NavigationBar
					styleName="inline"
					leftComponent={
						<Icon name="sidebar" style={AppStyle.leftNavigation} />
					}
					centerComponent={<Title>{this.noteBook.name}</Title>}
				/>
				<ListView data={this.state.notes} renderRow={this.renderRow} />
			</View>
		);
	}
}

const styles = StyleSheet.flatten({
	noteContainer: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "stretch"
	},
	noteTitle: {
		fontSize: 15,
		textAlign: "left"
	},
	noteTime: {
		textAlign: "right"
	}
});
