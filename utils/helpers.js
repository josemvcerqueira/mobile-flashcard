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

export async function handleInitialData() {
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
		title,
		questions: []
	};
}

export function fromEntries(arr) {
	const obj = arr.reduce((acc, element) => {
		let key = element[0];
		acc[key] = element[1];
		return acc;
	}, {});

	return obj;
}

export function* generator(questions) {
	for (let question of questions) {
		yield question;
	}
}

export function calcScore(questions, correct) {
	const total = questions.length;
	return (correct / total) * 100;
}
