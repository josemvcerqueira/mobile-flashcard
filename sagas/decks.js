import {
	takeEvery,
	takeLatest,
	take,
	call,
	fork,
	put
} from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../utils/api";

function* watchGetDecksRequest() {
	yield takeEvery(actions.Types.GET_DECKS, getDecks);
}

function* getDecks() {
	const decks = yield call(api.fetchDecks);
	yield put(actions.getDecks(decks));
}
