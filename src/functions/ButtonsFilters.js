import { setFilter } from "../store/todo.store.js";
import TodoList from "./TodoList.js";

export default function ButtonsFilters() {
	const buttonsFilters = document.querySelectorAll(".btn_filter");
	buttonsFilters.forEach(button =>
		button.addEventListener("click", event => {
			buttonsFilters.forEach(e => e.classList.remove("selected"));
			event.target.classList.add("selected");
			setFilter(event.target.textContent);
			TodoList(".listToDos");
		})
	);
}
