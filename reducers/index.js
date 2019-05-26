import { combineReducers } from "redux";

import loadingReducer from "./loadingReducer";
import decksReducer from "./decksReducers";
import errorReducer from "./errorReducer";
import quizReducer from "./quizReducer";

const rootReducer = combineReducers({
	isLoading: loadingReducer,
	decks: decksReducer,
	error: errorReducer,
	quiz: quizReducer
});

export default rootReducer;
