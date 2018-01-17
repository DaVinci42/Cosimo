import React, { Component } from "react";
import { View, StyleSheet, ScrollView, WebView } from "react-native";
import { NavigationBar, Icon, Title } from "@shoutem/ui";

import NoteManager from "../NoteManager";
import AppStyle from "../AppStyle";

export default class NoteContentComponent extends Component {
	note = this.props.navigation.state.params.note;

	state = {
		content: ""
	};

	componentWillMount() {
		this.fetchNoteContent(this.note);
	}

	fetchNoteContent = note => {
		NoteManager.fetchNoteContent(note)
			.then(content => {
				this.setState({
					content: content
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
					centerComponent={
						<Title numberOfLines={1} ellipsizeMode="middle">
							{this.note.name}
						</Title>
					}
				/>
				<WebView
					style={styles.content}
					source={{
						html: NoteManager.htmlFromMarkdown(this.state.content)
					}}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.flatten({
	content: { flex: 1 }
});
