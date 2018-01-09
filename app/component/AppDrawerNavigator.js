import React, { Component } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { DrawerNavigator, DrawerItems } from "react-navigation";
import { Image } from "@shoutem/ui";
import NoteListComponent from "./NoteListComponent";
import NoteBookListComponent from "./NoteBookListComponent";
import SettingComponent from "./SettingComponent";

const routeConfigs = {
	Note_List: {
		screen: NoteListComponent
	},
	NOTE_BOOK_LIST: {
		screen: NoteBookListComponent
	},
	SETTING: {
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
	labelStyle: {
		fontFamily: "Rubik-Regular",
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: 15,
		color: "#666666"
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
		labelStyle: styles.labelStyle
	}
};

export default DrawerNavigator(routeConfigs, drawerConfig);
