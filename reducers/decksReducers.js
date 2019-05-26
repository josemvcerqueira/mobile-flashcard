import { DECKS, CARDS } from "../constants";
import { fromEntries } from "../utils/helpers";

function decks(state = {}, action) {
	switch (action.type) {
		case DECKS.ADD: {
			const { id, title, questions } = action.payload.deck;
			return {
				...state,
				[id]: {
					...state[id],
					title,
					questions
				}
			};
		}
		case DECKS.LOAD_SUCCESS: {
			const { decks } = action.payload;
			return { ...state, ...decks };
		}
		case DECKS.REMOVE: {
			const { id } = action.payload;
			let stateArr = Object.entries(state).filter(deck => deck[0] !== id);
			let stateObj = fromEntries(stateArr);
			return { ...stateObj };
		}
		case CARDS.ADD: {
			const { question, answer, id } = action.payload.card;
			const arr = [{ question: question, answer: answer }];
			return {
				...state,
				[id]: {
					...state[id],
					questions: state[id].questions.concat(arr)
				}
			};
		}
		default:
			return state;
	}
}

export default decks;
