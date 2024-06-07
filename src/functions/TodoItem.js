import Button from "./Buttton.js";
import { toggleTodo } from "../store/todo.store.js";
import CounterPenginds from "./CounterPendings.js";

export default function TodoItem({ done, id, description }, parentElement) {
	const todoElement = document.createElement("li");
	todoElement.classList.add(`${done ? "checked" : "notChecked"}`);
	todoElement.setAttribute("id", `${id}`);
	todoElement.textContent = description;
	parentElement.append(todoElement);
	Button(parentElement);
	todoElement.addEventListener("click", event => {
		toggleTodo(id);
		event.target.classList.contains("notChecked")
			? event.target.classList.replace("notChecked", "checked")
			: event.target.classList.replace("checked", "notChecked");
		CounterPenginds();
	});
}
