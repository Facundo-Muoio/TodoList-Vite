import { getTodos, getCurrentFilter } from "../store/todo.store.js";
import CounterPenginds from "./CounterPendings.js";
import TodoItem from "./TodoItem.js";

/**
 *
 * @param {String} parent
 * @param {Void} todos
 */

export default function TodoList(parent) {
	let parentElement;
	parentElement ? "" : (parentElement = document.querySelector(parent));
	parentElement.innerHTML = "";
	CounterPenginds();
	getTodos(getCurrentFilter()).forEach(todo => {
		TodoItem(todo, parentElement);
	});
}
