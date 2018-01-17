import React, { Component } from "react";
import { View } from "react-native";
import { NavigationBar, Icon, Title, Text } from "@shoutem/ui";

import AppStyle from "../AppStyle";

export default class NotesInBookComponent extends Component {
	render() {
		return (
			<View style={AppStyle.container}>
				<NavigationBar
					styleName="inline"
					leftComponent={
						<Icon name="sidebar" style={AppStyle.leftNavigation} />
					}
					centerComponent={<Title>Notes In Book</Title>}
				/>
				<Text
					style={{
						flex: 1,
						textAlign: "center",
						textAlignVertical: "center"
					}}
				>
					Notes In Book
				</Text>
			</View>
		);
	}
}
