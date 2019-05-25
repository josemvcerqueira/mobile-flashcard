import { all } from "redux-saga/effects";

import decksSagas from "./decks";
import cardsSagas from "./cards";

export default function* rootSaga() {
	yield all([...decksSagas, cardsSagas()]);
}
