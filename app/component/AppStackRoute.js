import NoteByBookComponent from "./NoteByBookComponent";
import NoteBooksComponent from "./NoteBooksComponent";
import NoteContentComponent from "./NoteContentComponent";
import NoteInBookComponent from "./NoteInBookComponent";
import SettingComponent from "./SettingComponent";

const STACK_ROUTE_NOTE_BY_BOOK = "Note By Book";
const STACK_ROUTE_NOTE_BOOKS = "Note Books";
const STACK_ROUTE_NOTES_IN_BOOK = "Notes In Book";
const STACK_ROUTE_NOTE_CONTENT = "Note Content";
const STACK_ROUTE_SETTING = "Setting";

export {
	STACK_ROUTE_NOTE_BY_BOOK,
	STACK_ROUTE_NOTE_BOOKS,
	STACK_ROUTE_NOTES_IN_BOOK,
	STACK_ROUTE_NOTE_CONTENT,
	STACK_ROUTE_SETTING
};

export default (StackRoute = {
	[STACK_ROUTE_NOTE_BY_BOOK]: {
		screen: NoteByBookComponent
	},
	[STACK_ROUTE_NOTE_BOOKS]: {
		screen: NoteBooksComponent
	},
	[STACK_ROUTE_NOTES_IN_BOOK]: {
		screen: NoteInBookComponent
	},
	[STACK_ROUTE_NOTE_CONTENT]: {
		screen: NoteContentComponent
	},
	[STACK_ROUTE_SETTING]: {
		screen: SettingComponent
	}
});
