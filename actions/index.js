export const Types = {
	ADD_DECK: "ADD_DECK",
	GET_DECKS: "GET_DECKS"
};

export const addDeck = deck => ({ type: Types.ADD_DECK, payload: { deck } });

export const getDecks = decks => ({
	type: Types.GET_DECKS,
	payload: { decks }
});
