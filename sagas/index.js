import { all } from "redux-saga/effects";

import decksSagas from "./decks";
import cardsSagas from "./cards";
import quizsSagas from "./quiz";

export default function* rootSaga() {
	yield all([...decksSagas, cardsSagas(), quizsSagas()]);
}
