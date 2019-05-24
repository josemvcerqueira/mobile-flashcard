import { takeLatest, call, fork, put } from "redux-saga/effects";

import * as actions from "../actions";
import * as api from "../utils/api";
import { DECKS } from "../constants";

function* watchGetDecksRequest() {
	yield takeLatest(DECKS.INITIAL_DATA, getDecks);
}

function* getDecks() {
	const decks = yield call(api.fetchDecks);
	yield put(actions.getDecks(decks));
}

function* watchAddDeckRequest() {
	yield takeLatest(DECKS.ADD, addDeck);
}

function* addDeck(action) {
	yield call(api.addDeck, action.payload.deck);
	yield call(getDecks);
}

const decksSagas = [fork(watchGetDecksRequest), fork(watchAddDeckRequest)];

export default decksSagas;