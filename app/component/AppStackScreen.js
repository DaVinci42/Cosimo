import { StackNavigator } from "react-navigation";
import { Animated, Easing } from "react-native";

import SplashScreen from "./SplashScreen";
import AppDrawerScreen from "./AppDrawerScreen";
import NoteByBookScreen from "./NoteByBookScreen";
import NoteBooksScreen from "./NoteBooksScreen";
import NotesInBookComponent from "./NotesInBookComponent";
import NoteContentComponent from "./NoteContentComponent";
import SettingScreen from "./SettingScreen";

const STACK_ROUTE_SPLASH = "STACK_ROUTE_SPLASH";
const STACK_ROUTE_DRAWER = "STACK_ROUTE_DRAWER";
const STACK_ROUTE_NOTE_BY_BOOK = "STACK_ROUTE_NOTE_BY_BOOK";
const STACK_ROUTE_NOTE_BOOKS = "STACK_ROUTE_NOTE_BOOKS";
const STACK_ROUTE_NOTES_IN_BOOK = "STACK_ROUTE_NOTES_IN_BOOK";
const STACK_ROUTE_NOTE_CONTENT = "STACK_ROUTE_NOTE_CONTENT";
const STACK_ROUTE_SETTING = "STACK_ROUTE_SETTING";

export {
	STACK_ROUTE_SPLASH,
	STACK_ROUTE_DRAWER,
	STACK_ROUTE_NOTE_BY_BOOK,
	STACK_ROUTE_NOTE_BOOKS,
	STACK_ROUTE_NOTES_IN_BOOK,
	STACK_ROUTE_NOTE_CONTENT,
	STACK_ROUTE_SETTING
};

export default StackNavigator(
	{
		[STACK_ROUTE_SPLASH]: {
			screen: SplashScreen
		},
		[STACK_ROUTE_DRAWER]: {
			screen: AppDrawerScreen
		},
		[STACK_ROUTE_NOTE_BY_BOOK]: {
			screen: NoteByBookScreen
		},
		[STACK_ROUTE_NOTES_IN_BOOK]: {
			screen: NotesInBookComponent
		},
		[STACK_ROUTE_NOTE_BOOKS]: {
			screen: NoteBooksScreen
		},
		[STACK_ROUTE_SETTING]: {
			screen: SettingScreen
		},
		[STACK_ROUTE_NOTE_CONTENT]: {
			screen: NoteContentComponent
		}
	},
	{
		initialRouteName: STACK_ROUTE_SPLASH,
		headerMode: "none"
	}
);
