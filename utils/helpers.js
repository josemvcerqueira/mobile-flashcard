import { fetchDecks } from "./api";
import { getDecks } from "../actions";

export function randomId() {
	return (
		Math.random()
			.toString(36)
			.substring(2, 15) +
		Math.random()
			.toString(36)
			.substring(2, 15)
	);
}

export function formatData(data) {
	return data === null ? {} : JSON.parse(data);
}

export async function handleDecks() {
	const data = await fetchDecks();
	const decks = getDecks(data);
	return decks;
}

export function isEmpty(obj) {
	return Object.keys(obj).length;
}
