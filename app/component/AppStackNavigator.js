import { StackNavigator } from "react-navigation";

import NoteByBookComponent from "./NoteByBookComponent";
import NoteBooksComponent from "./NoteBooksComponent";
import NoteInBookComponent from "./NoteInBookComponent";
import NoteContentComponent from "./NoteContentComponent";

import {
	ROUTE_NOTE_BY_BOOK,
	ROUTE_NOTE_BOOKS,
	ROUTE_NOTE_IN_BOOK,
	ROUTE_NOTE_CONTENT
} from "../Constant";

export default StackNavigator({
	ROUTE_NOTE_BOOKS: {
		screen: NoteBooksComponent
	},
	ROUTE_NOTE_BY_BOOK: {
		screen: NoteByBookComponent
	},
	ROUTE_NOTE_IN_BOOK: {
		screen: NoteInBookComponent
	},
	ROUTE_NOTE_CONTENT: {
		screen: NoteContentComponent
	}
});
