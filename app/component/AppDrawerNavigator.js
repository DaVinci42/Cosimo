import React, { Component } from "react";
import { DrawerNavigator } from "react-navigation";
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

export default DrawerNavigator(routeConfigs);
