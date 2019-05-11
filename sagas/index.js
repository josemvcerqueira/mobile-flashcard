import decksSagas from "./decks";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
	yield all([...decksSagas]);
}
