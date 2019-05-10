import { AsyncStorage } from "react-native";
import { formatData } from "./helpers";

const FLASHCARD_STORAGE_KEY = "mobileFlashcard:decks";

export async function fetchDecks() {
	const data = await AsyncStorage.getItem(FLASHCARD_STORAGE_KEY);
	const decks = await formatData(data);
	return decks;
}

export function saveDeck(id, title) {
	AsyncStorage.mergeItem(
		FLASHCARD_STORAGE_KEY,
		JSON.stringify({
			[id]: {
				title
			}
		})
	);
}
