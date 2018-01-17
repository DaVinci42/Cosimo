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

export default class NotesInBookComponent extends Component {
	constructor(props) {
		super(props);

		this.noteBook = props.navigation.state.params.book;
		this.state = {
			notes: []
		};
	}

	renderRow = note => {
		return (
			<Button style={styles.noteContainer}>
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

	componentWillMount() {
		this.fetchNotesInBook(this.noteBook);
	}

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
