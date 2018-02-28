import RNFS from "react-native-fs";

import NoteBook from "./bean/NoteBook";
import Note from "./bean/Note";
import MarkdownIt from "markdown-it";

const NOTE_ROOT_DIR = RNFS.ExternalStorageDirectoryPath + "/Download/Notes";

export default class NoteManager {
	static timeDescFromDate = date => {
		return date.toLocaleDateString("en-US", {
			month: "short",
			day: "2-digit",
			year: "numeric"
		});
	};

	static getFileExtension = filename => {
		return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
	};

	static fileNameWithoutExtension = fileName => {
		return fileName.replace(/\.[^/.]+$/, "");
	};

	static notesByBook = () => {
		return new Promise((resolve, reject) => {
			NoteManager.noteBooks()
				.then(books => {
					var allPromise = [];
					books.forEach(book => {
						allPromise.push(NoteManager.notesInBook(book));
					});
					Promise.all(allPromise)
						.then(values => {
							var noteArray = values
								.filter(notes => notes.length > 0)
								.map(notes => {
									return {
										data: notes,
										book: notes[0].noteBook
									};
								});
							resolve(noteArray);
						})
						.catch(e => reject(e));
				})
				.catch(e => reject(e));
		});
	};

	static noteBooks = () => {
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
								NoteManager.getFileExtension(
									file.path
								).toUpperCase() === "MD"
							);
						})
						.map(file => {
							return new Note(
								NoteManager.fileNameWithoutExtension(file.name),
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

	static fetchNoteContent = (note: Note) => {
		return new Promise((resolve, reject) => {
			RNFS.readFile(note.path)
				.then(content => {
					resolve(content);
				})
				.catch(e => reject(e));
		});
	};

	static htmlFromMarkdown = markdown => {
		let md = new MarkdownIt();
		return md.render(markdown);
	};
}
