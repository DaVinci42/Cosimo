import React, { Component } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { DrawerNavigator, DrawerItems } from "react-navigation";
import { Image } from "@shoutem/ui";

import NoteByBookComponent from "./NoteByBookComponent";
import NoteListComponent from "./NoteListComponent";
import NoteBooksComponent from "./NoteBooksComponent";
import SettingComponent from "./SettingComponent";

import {
	ROUTE_NOTE_BY_BOOK,
	ROUTE_NOTE_BOOKS,
	ROUTE_NOTE_IN_BOOK,
	ROUTE_NOTE_CONTENT,
	ROUTE_SETTING
} from "../Constant";

const routeConfigs = {
	ROUTE_NOTE_BY_BOOK: {
		screen: NoteByBookComponent
	},
	ROUTE_NOTE_BOOKS: {
		screen: NoteBooksComponent
	},
	ROUTE_SETTING: {
		screen: SettingComponent
	}
};

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
