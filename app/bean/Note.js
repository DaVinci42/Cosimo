export default class Note {
	// updateTime means mtime
	constructor(name, path, noteBook, content, updateTime) {
		this.name = name;
		this.path = path;
		this.noteBook = noteBook;
		this.content = content;
		this.updateTime = updateTime;
	}
}
