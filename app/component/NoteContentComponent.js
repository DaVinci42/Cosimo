import React, { Component } from "react";
import { Button, View, StyleSheet } from "react-native";
import { NavigationBar, Icon, Title, Text } from "@shoutem/ui";
import Note from "../bean/Note";
import NoteManager from "../NoteManager";

export default class NoteContentComponent extends Component {
	constructor(props) {
		super(props);

		this.note = props.navigation.state.params.note;

		this.state = {};

		this.updateNoteContent = this.updateNoteContent.bind(this);
	}

	updateNoteContent(note: Note) {
		NoteManager.updateNoteContent
			.then(newNote => {
				this.note = newNote;
			})
			.catch(e => console.log(e));
	}

	render() {
		return <Text>{this.note.content}</Text>;
	}
}
