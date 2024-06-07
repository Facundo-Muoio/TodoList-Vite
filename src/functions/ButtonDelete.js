import { deleteAllTodos } from "../store/todo.store.js";
import TodoList from "./TodoList.js";

export default function ButtonDelete() {
	const buttonDeleteElement = document.querySelector(".clearAll");
	buttonDeleteElement.addEventListener("click", () => {
		deleteAllTodos();
		TodoList(".listToDos");
	});
}
