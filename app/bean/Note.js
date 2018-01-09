export default class Note {
	constructor(name, path, noteBook, content, updateTime) {
		this.name = name;
		this.path = path;
		this.noteBook = noteBook;
		this.content = content;

		// mtime
		this.updateTime = updateTime;
	}
}
