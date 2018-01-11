import React, { Component } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { DrawerNavigator, DrawerItems } from "react-navigation";
import { Image } from "@shoutem/ui";

import SettingComponent from "./SettingComponent";
import { NoteByBookScreen, NoteBooksScreen } from "./AppStackScreen";

const routeConfigs = {
	ROUTE_DRAWER_NOTE_BY_BOOK: {
		screen: NoteByBookScreen
	},
	ROUTE_DRAWER_NOTE_BOOKS: {
		screen: NoteBooksScreen
	},
	ROUTE_DRAWER_SETTING: {
		screen: SettingComponent
	}
};

const ROUTE_DRAWER_NOTE_BY_BOOK = "ROUTE_DRAWER_NOTE_BY_BOOK";
const ROUTE_DRAWER_NOTE_BOOKS = "ROUTE_DRAWER_NOTE_BOOKS";
const ROUTE_DRAWER_SETTING = "ROUTE_DRAWER_SETTING";

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

const CustomDrawerContentComponent = props => (
	<ScrollView style={styles.container}>
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
		style: styles.drawerContent,
		labelStyle: styles.drawerLabel
	}
};

export default DrawerNavigator(routeConfigs, drawerConfig);

export {
	ROUTE_DRAWER_NOTE_BY_BOOK,
	ROUTE_DRAWER_NOTE_BOOKS,
	ROUTE_DRAWER_SETTING
};
