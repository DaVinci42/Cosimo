import React, { Component } from "react";
import { View, BackHandler } from "react-native";
import { Text, NavigationBar, Icon, Title } from "@shoutem/ui";

import AppStyle from "../AppStyle";

const title = "Note By Book";

const kAppDrawerBackListener = "kAppDrawerBackListener";

export default class NoteByBookScreen extends Component {
	static navigationOptions = {
		drawerLabel: title
	};

	backHandler = () => {
		BackHandler.exitApp();
		return true;
	};

	componentWillMount() {
		BackHandler.addEventListener(kAppDrawerBackListener, this.backHandler);
	}

	componentWillUnmount() {
		BackHandler.removeEventListener(
			kAppDrawerBackListener,
			this.backHandler
		);
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
				<Text
					style={{
						flex: 1,
						textAlign: "center",
						textAlignVertical: "center"
					}}
				>
					Note By Book
				</Text>
			</View>
		);
	}
}
