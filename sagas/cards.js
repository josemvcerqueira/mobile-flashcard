import { takeLatest, call, fork } from "redux-saga/effects";

import * as api from "../utils/api";
import { CARDS } from "../constants";

function* watchAddCardRequest() {
	yield takeLatest(CARDS.ADD, addCard);
}

function* addCard(action) {
	yield call(api.addCard, action.payload.card);
}

const decksSagas = [fork(watchAddCardRequest)];

export default decksSagas;
