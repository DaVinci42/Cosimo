import React, { Component } from "react";
import { ScrollView } from "react-native";
import { DrawerNavigator, DrawerItems } from "react-navigation";
import { Image } from "@shoutem/ui";

import AppStyle from "../AppStyle";

import NoteByBookScreen from "./NoteByBookScreen";
import NoteBooksScreen from "./NoteBooksScreen";
import SettingScreen from "./SettingScreen";

const AppDrawerContentComponent = props => (
	<ScrollView style={AppStyle.drawerContainer}>
		<Image
			styleName="large-banner"
			source={require("./../image/bg_drawer_header.jpg")}
		/>
		<DrawerItems {...props} />
	</ScrollView>
);

const drawerConfig = {
	contentComponent: AppDrawerContentComponent,
	drawerOpenRoute: "DrawerOpen",
	drawerCloseRoute: "DrawerClose",
	drawerToggleRoute: "DrawerToggle",
	contentOptions: {
		style: AppStyle.drawerContent,
		labelStyle: AppStyle.drawerLabel
	}
};

const DRAWER_NOTE_BY_BOOK = "DRAWER_NOTE_BY_BOOK";
const DRAWER_NOTE_BOOKS = "DRAWER_NOTE_BOOKS";
const DRAWER_SETTING = "DRAWER_SETTING";
export { DRAWER_NOTE_BY_BOOK, DRAWER_NOTE_BOOKS, DRAWER_SETTING };

const drawerRoute = {
	[DRAWER_NOTE_BY_BOOK]: {
		screen: NoteByBookScreen
	},
	[DRAWER_NOTE_BOOKS]: {
		screen: NoteBooksScreen
	},
	[DRAWER_SETTING]: {
		screen: SettingScreen
	}
};

const AppDrawer = DrawerNavigator(drawerRoute, drawerConfig);

class AppDrawerScene extends Component {
	render() {
		return <AppDrawer navigation={this.props.navigation} />;
	}
}

AppDrawerScene.router = AppDrawer.router;
export default AppDrawerScene;
