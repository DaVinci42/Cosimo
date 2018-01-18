import RNFS from "react-native-fs";
import showdown from "showdown";

import NoteBook from "./bean/NoteBook";
import Note from "./bean/Note";

const NOTE_ROOT_DIR = RNFS.ExternalStorageDirectoryPath + "/Download/Notes";

const ContentPrefix = `
<!DOCTYPE HTML>
<html>

<head>
    <meta charset="UTF-8">
    <title>Cosimo</title>
</head>

<body>`;

const ContentPostfix = `
</body>
</html>`;

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
		let converter = new showdown.Converter();
		let content = converter.makeHtml(markdown);
		return ContentPrefix + content + ContentPostfix;
	};
}
