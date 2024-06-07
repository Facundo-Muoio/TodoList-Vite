import { addTodo } from "../store/todo.store.js";
import TodoList from "../functions/TodoList.js";

export default function InputTodos() {
	let description;
	const inputElement = document.querySelector("input");

	const formElemnt = document.querySelector("#form-todo");
	formElemnt.addEventListener("submit", event => {
		event.preventDefault();
		if (!description) throw new Error("We need a description to add todo task");
		addTodo(description);
		inputElement.value = "";
		description = "";
		TodoList(".listToDos");
	});

	inputElement.addEventListener("change", event => {
		description = event.target.value.trim();
	});
}
