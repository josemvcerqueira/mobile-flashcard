import { DECKS } from "../constants";

function loadingReducer(state = false, action) {
	switch (action.type) {
		case DECKS.LOAD:
			return true;
		case DECKS.LOAD_SUCCESS:
			return false;
		default:
			return state;
	}
}

export default loadingReducer;
