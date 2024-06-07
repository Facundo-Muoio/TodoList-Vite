import { deleteTodo } from "../store/todo.store.js";
import TodoList from "./TodoList.js";

export default function Button(parentElement) {
	const buttonElement = document.createElement("button");
	buttonElement.innerHTML = `
		<i class="fa-solid fa-trash"></i>
  `;
	buttonElement.addEventListener("click", () => {
		let idTodoElement = buttonElement.previousElementSibling.id;
		deleteTodo(idTodoElement);
		TodoList(".listToDos");
	});

	parentElement.append(buttonElement);
}
