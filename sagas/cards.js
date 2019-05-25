import { takeLatest, call } from "redux-saga/effects";

import * as api from "../utils/api";
import { CARDS } from "../constants";

function* watchAddCardRequest() {
	yield takeLatest(CARDS.ADD, addCard);
}

function* addCard(action) {
	yield call(api.addCard, action.payload.card);
}

const cardsSagas = watchAddCardRequest;

export default cardsSagas;
