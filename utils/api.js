import { AsyncStorage } from "react-native";

const FLASHCARD_STORAGE_KEY = "mobileFlashcard:decks";

export async function fetchDecks() {
	const data = await AsyncStorage.getItem(FLASHCARD_STORAGE_KEY);
	const decks = data === null ? {} : await JSON.parse(data);
	return decks;
}

export function addDeck({ id, title }) {
	AsyncStorage.mergeItem(
		FLASHCARD_STORAGE_KEY,
		JSON.stringify({
			[id]: {
				title
			}
		})
	);
}

export function addCard({ id, question, answer }) {
	const arr = [{ question: question, answer: answer }];
	AsyncStorage.mergeItem(
		FLASHCARD_STORAGE_KEY,
		JSON.stringify({
			[id]: {
				questions: [...[id].questions].concat(arr)
			}
		})
	);
}

export async function removeDeck(id) {
	console.log(id);
	const data = await AsyncStorage.getItem(FLASHCARD_STORAGE_KEY);
	const decks = await JSON.parse(data);
	decks[id] = undefined;
	delete decks[id];
	AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(decks));
}
