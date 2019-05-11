import { AsyncStorage } from "react-native";

const FLASHCARD_STORAGE_KEY = "mobileFlashcard:decks";

export async function fetchDecks() {
	//AsyncStorage.clear();
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
