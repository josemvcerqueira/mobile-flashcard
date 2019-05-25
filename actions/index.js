import { DECKS } from "../constants";

export const loadDecks = () => ({
	type: DECKS.LOAD
});

export const setError = error => ({
	type: DECKS.LOAD_FAIL,
	payload: {
		error
	}
});

export const getDecks = decks => ({
	type: DECKS.LOAD_SUCCESS,
	payload: {
		decks
	}
});

export const addDeck = deck => ({ type: DECKS.ADD, payload: { deck } });

export const removeDeck = id => ({ type: DECKS.REMOVE, payload: { id } });
