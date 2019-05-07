import { AsyncStorage } from "react-native";

const FLASHCARD_STORAGE_KEY = "mobileFlashcard:decks";

export function fetchDecks() {
	return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then(decks =>
		JSON.parse(decks)
	);
}

export function getDeck(id) {
	return id;
}

export function saveDeck(id, title) {
	return id + title;
}

export function addCardToDeck(id, card) {
	return id + card;
}

export function removeDeck(id) {
	return id;
}

export function removeCard(id, question) {
	return id + question;
}
