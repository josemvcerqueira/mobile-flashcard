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

export async function handleDecks() {
	const decks = await fetchDecks();
	getDecks(decks);
	return decks;
}

export function isEmpty(obj) {
	return Object.keys(obj).length;
}

export function createDeck(title) {
	return {
		id: randomId(),
		title
	};
}
