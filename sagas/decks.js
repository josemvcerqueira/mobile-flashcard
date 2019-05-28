import { takeLatest, call, fork, put } from "redux-saga/effects";

import * as actions from "../actions";
import * as api from "../utils/api";
import { DECKS } from "../constants";

function* watchGetDecksRequest() {
	yield takeLatest(DECKS.LOAD, handleDecksLoad);
}

function* handleDecksLoad() {
	try {
		const decks = yield call(api.fetchDecks);
		yield put(actions.getDecks(decks));
	} catch (error) {
		yield put(actions.setError(error.toString()));
	}
}

function* watchAddDeckRequest() {
	yield takeLatest(DECKS.ADD, addDeck);
}

function* addDeck(action) {
	yield call(api.addDeck, action.payload.deck);
	yield call(handleDecksLoad);
}

function* watchRemoveDeckRequest() {
	yield takeLatest(DECKS.REMOVE, removeDeck);
}

function* removeDeck(action) {
	try {
		yield call(api.removeDeck, action.payload.id);
		yield call(handleDecksLoad);
	} catch (error) {
		console.log("error trying to remove");
	}
}

const decksSagas = [
	fork(watchGetDecksRequest),
	fork(watchAddDeckRequest),
	fork(watchRemoveDeckRequest)
];

export default decksSagas;
