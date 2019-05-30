import { call, takeLatest, delay } from "redux-saga/effects";

import * as actions from "../actions";
import { QUIZ } from "../constants";

function* watchAddCorrectAnswer() {
	yield takeLatest(QUIZ.CORRECT, handleAddCorrectAnswer);
}

function* handleAddCorrectAnswer() {
	yield delay(500);
	yield call(actions.addCorrectAnswer);
}

const quizsSagas = watchAddCorrectAnswer;

export default quizsSagas;
