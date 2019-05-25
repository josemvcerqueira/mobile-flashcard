import { DECKS } from "../constants";
import { fromEntries } from "../utils/helpers";

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
		case DECKS.REMOVE: {
			const { id } = action.payload;
			let stateArr = Object.entries(state).filter(deck => deck[0] !== id);
			let stateObj = fromEntries(stateArr);
			console.log(stateObj);
			return { ...stateObj };
		}
		default:
			return state;
	}
}

export default decks;
