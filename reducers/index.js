import { combineReducers } from "redux";

import loadingReducer from "./loadingReducer";
import decksReducer from "./decksReducers";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
	isLoading: loadingReducer,
	decks: decksReducer,
	error: errorReducer
});

export default rootReducer;
