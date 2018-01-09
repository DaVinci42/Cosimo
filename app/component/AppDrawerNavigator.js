import React, { Component } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { DrawerNavigator, DrawerItems } from "react-navigation";
import { Image } from "@shoutem/ui";
import NoteBookListComponent from "./NoteBookListComponent";
import SettingComponent from "./SettingComponent";

const routeConfigs = {
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
		activeTintColor: "#e91e63",
		style: styles.drawerContent
	}
};

export default DrawerNavigator(routeConfigs, drawerConfig);
