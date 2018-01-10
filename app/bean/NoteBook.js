export default class NoteBook {
	// updateTime means mtime
	constructor(name, path, updateTime) {
		this.name = name;
		this.path = path;
		this.updateTime = updateTime;
	}
}
