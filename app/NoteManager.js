import NoteBook from "./bean/NoteBook";
import Note from "./bean/Note";

const RNFS = require("react-native-fs");

let NOTE_ROOT_DIR = RNFS.ExternalStorageDirectoryPath + "/Download/Notes";

export default class NoteManager {
	static getFileExtension = filename => {
		return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
	};

	static fetchNoteBooks = () => {
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
	};

	static notesInBook = (noteBook: NoteBook) => {
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
	};

	static updateNoteContent = (note: Note) => {
		return new Promise((resolve, reject) => {
			RNFS.readFile(note.path)
				.then(content => {
					note.content = content;
					resolve(note);
				})
				.catch(e => reject(e));
		});
	};
}
