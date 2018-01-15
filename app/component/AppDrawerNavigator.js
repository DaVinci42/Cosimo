import React, { Component } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { DrawerNavigator, DrawerItems } from "react-navigation";
import { Image } from "@shoutem/ui";

import DrawerNoteByBookScreen from "./DrawerNoteByBookScreen";
import DrawerNoteBooksScreen from "./DrawerNoteBooksScreen";
import DrawerSettingScreen from "./DrawerSettingScreen";

const CustomDrawerContentComponent = props => (
	<ScrollView style={styles.container}>
		<Image
			styleName="large-banner"
			source={require("./../image/bg_drawer_header.jpg")}
		/>
		<DrawerItems {...props} />
	</ScrollView>
);

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	drawerContent: {
		flex: 1
	},
	drawerLabel: {
		fontFamily: "Rubik-Regular",
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 15,
		color: "#222222"
	}
});

const drawerConfig = {
	contentComponent: CustomDrawerContentComponent,
	drawerOpenRoute: "DrawerOpen",
	drawerCloseRoute: "DrawerClose",
	drawerToggleRoute: "DrawerToggle",
	contentOptions: {
		style: styles.drawerContent,
		labelStyle: styles.drawerLabel
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
