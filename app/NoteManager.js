const RNFS = require("react-native-fs");

let NOTE_ROOT_DIR = RNFS.ExternalStorageDirectoryPath + "/Download/Notes";

function listNoteBooks() {
	// TODO
	RNFS.readFile(NOTE_ROOT_DIR)
		.then(result => {
			let dirs = [];
			for (i in result) {
			}
		})
		.catch(e => {
			console.log(e);
		});
}

function notesInBook(noteBook: String) {
	// return notes in noteBook
}

function allNotes() {
	// return all notes
}
