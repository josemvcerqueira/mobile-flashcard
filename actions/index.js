export const Types = {
	ADD_DECK: "ADD_DECK",
	GET_DECKS: "GET_DECKS",
	INITIAL_DATA: "INITIAL_DATA"
};

export const addDeck = deck => ({ type: Types.ADD_DECK, payload: { deck } });

export const handleInitialData = () => ({
	type: Types.INITIAL_DATA
});

export const getDecks = decks => ({
	type: Types.GET_DECKS,
	payload: {
		decks
	}
});
