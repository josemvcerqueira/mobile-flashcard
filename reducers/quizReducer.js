import { QUIZ } from "../constants";

const INITIAL_STATE = {
	correct: 0,
	incorrect: 0
};

function quizReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case QUIZ.CORRECT:
			return {
				...state,
				correct: state.correct + 1
			};
		case QUIZ.INCORRECT:
			return {
				...state,
				incorrect: state.incorrect + 1
			};
		case QUIZ.RESET:
			return {
				...INITIAL_STATE
			};
		default:
			return state;
	}
}

export default quizReducer;
