import { DECKS } from "../constants";

const INITIAL_STATE = {};

function decks(state = INITIAL_STATE, action) {
	switch (action.type) {
		case DECKS.ADD: {
			const { id, title } = action.payload.deck;
			return {
				...state,
				[id]: {
					title
				}
			};
		}
		case DECKS.GET: {
			const { decks } = action.payload;
			return {
				...state,
				...decks
			};
		}
		default:
			return state;
	}
}

export default decks;
