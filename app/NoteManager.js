import NoteBook from "./bean/NoteBook";
import Note from "./bean/Note";

const RNFS = require("react-native-fs");

let NOTE_ROOT_DIR = RNFS.ExternalStorageDirectoryPath + "/Download/Notes";

let NoteManager = {
	listNoteBooks(): Promise<NoteBook[]> {
		return new Promise((resolve, reject) => {
			RNFS.readDir(NOTE_ROOT_DIR)
				.then(files => {
					let books = files
						.filter(file => {
							return file.isDirectory() === true;
						})
						.map(file => {
							return new NoteBook(
								file.name,
								file.path,
								file.mtime
							);
						});
					resolve(books);
				})
				.catch(e => {
					reject(e);
				});
		});
	},

	notesInBook(noteBook: NoteBook): Promise<Note[]> {},

	allNotes(): Promise<Note[]> {}
};

module.exports = NoteManager;
