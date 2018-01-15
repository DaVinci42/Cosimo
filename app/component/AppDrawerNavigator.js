import React, { Component } from "react";
import { ScrollView } from "react-native";
import { DrawerNavigator, DrawerItems } from "react-navigation";
import { Image } from "@shoutem/ui";

import DrawerNoteByBookScreen from "./DrawerNoteByBookScreen";
import DrawerNoteBooksScreen from "./DrawerNoteBooksScreen";
import DrawerSettingScreen from "./DrawerSettingScreen";

import AppStyle from "../AppStyle";

const CustomDrawerContentComponent = props => (
	<ScrollView style={AppStyle.drawerContainer}>
		<Image
			styleName="large-banner"
			source={require("./../image/bg_drawer_header.jpg")}
		/>
		<DrawerItems {...props} />
	</ScrollView>
);

const drawerConfig = {
	contentComponent: CustomDrawerContentComponent,
	drawerOpenRoute: "DrawerOpen",
	drawerCloseRoute: "DrawerClose",
	drawerToggleRoute: "DrawerToggle",
	contentOptions: {
		style: AppStyle.drawerContent,
		labelStyle: AppStyle.drawerLabel
	}
};

const DRAWER_NOTE_BY_BOOK = "Note By Book";
const DRAWER_NOTE_BOOKS = "Note Books";
const DRAWER_SETTING = "Setting";

export { DRAWER_NOTE_BY_BOOK, DRAWER_NOTE_BOOKS, DRAWER_SETTING };

const drawerRoute = {
	[DRAWER_NOTE_BY_BOOK]: {
		screen: DrawerNoteByBookScreen
	},
	[DRAWER_NOTE_BOOKS]: {
		screen: DrawerNoteBooksScreen
	},
	[DRAWER_SETTING]: {
		screen: DrawerSettingScreen
	}
};

export default DrawerNavigator(drawerRoute, drawerConfig);
