import TodoList from "../functions/TodoList.js";
import InputTodos from "../functions/Input.js";
import { initState } from "../store/todo.store.js";
import ButtonDelete from "../functions/ButtonDelete.js";
import ButtonsFilters from "../functions/ButtonsFilters.js";

initState();
InputTodos();
TodoList(".listToDos");
ButtonsFilters();
ButtonDelete();

/**
 *
 * @param {String} elementId
 */

export default function App(elementId) {
	(() => {
		const app = document.createElement("div");
		app.innerHTML = `<h1>Hola Mundo!</h1>`;
		document.querySelector(elementId).append(app);
	})();
}
