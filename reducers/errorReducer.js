import { DECKS } from "../constants";

function errorReducer(state = null, action) {
	switch (action.type) {
		case DECKS.LOAD_FAIL:
			return action.payload.error;
		case DECKS.LOAD:
		case DECKS.LOAD_SUCCESS:
			return null;
		default:
			return state;
	}
}

export default errorReducer;
