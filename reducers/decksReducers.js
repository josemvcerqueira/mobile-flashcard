import { DECKS } from "../constants";

function decks(state = {}, action) {
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
		case DECKS.LOAD_SUCCESS: {
			const { decks } = action.payload;
			return { ...state, ...decks };
		}
		default:
			return state;
	}
}

export default decks;
