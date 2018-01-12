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

	notesInBook(noteBook: NoteBook): Promise<Note[]> {
		return new Promise((resolve, reject) => {
			RNFS.readDir(noteBook.path)
				.then(files => {
					let notes = files
						.filter(file => {
							return (
								getFileExtension(file.path).toUpperCase() ===
								"MD"
							);
						})
						.map(file => {
							return new Note(
								file.name,
								file.path,
								noteBook,
								"",
								file.mtime
							);
						});
					resolve(notes);
				})
				.catch(e => {
					reject(e);
				});
		});
	},

	allNotes(): Promise<Note[]> {},

	updateNoteContent(note: Note): Promise<Note> {
		return new Promise((resolve, reject) => {
			RNFS.readFile(note.path)
				.then(content => {
					note.content = content;
					resolve(note);
				})
				.catch(e => reject(e));
		});
	}
};

function getFileExtension(filename) {
	return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
}

module.exports = NoteManager;
