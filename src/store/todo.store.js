import Todo from "../model/todo.model.js";

const Filter = {
	All: "All",
	Completed: "Completed",
	Pending: "Pendings",
};

const state = {
	todos: [new Todo(crypto.randomUUID(), "Leer por las noches")],
	filter: Filter.All,
};

const toggleTodo = todoId => {
	let index = state.todos.findIndex(todo => todo.id === todoId);
	state.todos[index].done = !state.todos[index].done;
	saveLocalStorage();
};

const initState = () => {
	if (!loadStore()) return saveLocalStorage();
	state.todos = loadStore().todos;
};

const loadStore = () => JSON.parse(localStorage.getItem("state"));

const saveLocalStorage = () =>
	localStorage.setItem("state", JSON.stringify(state));

const getTodos = (filter = Filter.All) => {
	switch (filter) {
		case Filter.All:
			return [...state.todos];
		case Filter.Completed:
			return state.todos.filter(todo => todo.done === true);
		case Filter.Pending:
			return state.todos.filter(todo => todo.done === false);
		default:
			throw new Error(`Option ${filter} is not valid.`);
	}
};

const addTodo = description => {
	if (!description) throw new Error("Description is required.");
	state.todos.push(new Todo(crypto.randomUUID(), description));
	saveLocalStorage();
};

const deleteTodo = idTodo => {
	let index = state.todos.findIndex(todo => todo.id === idTodo);
	if (index === -1) return;
	state.todos.splice(index, 1);
	saveLocalStorage();
};

const deleteAllTodos = () => {
	state.todos = state.todos.filter(todo => todo.done !== true);
	saveLocalStorage();
};

const setFilter = (newFilter = Filter.All) => {
	state.filter = newFilter;
	saveLocalStorage();
};

const getCurrentFilter = () => {
	return state.filter;
};

export {
	toggleTodo,
	initState,
	loadStore,
	getTodos,
	addTodo,
	deleteTodo,
	deleteAllTodos,
	setFilter,
	getCurrentFilter,
};
