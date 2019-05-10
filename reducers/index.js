import { Types } from "../actions";

const INITIAL_STATE = {};

export default function decks(state = INITIAL_STATE, action) {
	switch (action.type) {
		case Types.ADD_DECK: {
			const { id, title } = action.payload.deck;
			return {
				...state,
				[id]: {
					title
				}
			};
		}
		case Types.GET_DECKS: {
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
