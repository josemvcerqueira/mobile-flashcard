import { DECKS } from "../constants";

export const addDeck = deck => ({ type: DECKS.ADD, payload: { deck } });

export const handleInitialData = () => ({
	type: DECKS.INITIAL_DATA
});

export const getDecks = decks => ({
	type: DECKS.GET,
	payload: {
		decks
	}
});
