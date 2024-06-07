import { getTodos } from "../store/todo.store";

export default function CounterPenginds() {
	const counter = document.querySelector(".counter_pendings");
	const todosPendings = getTodos("Pendings").length;
	counter.textContent = `Pendings ${todosPendings}`;
}
