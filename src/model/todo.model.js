export default class Todo {
	constructor(id, description) {
		this.id = id;
		this.description = description;
		this.done = false;
		this.createdAt = new Date();
	}
}
