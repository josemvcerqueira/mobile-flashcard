import React from "react";
import { connect } from "react-redux";

import QuizView from "./QuizView";

const Quiz = ({ navigation, decksArray }) => {
	const { entryId } = navigation.state.params;

	const deck = decksArray.filter(arr => entryId === arr[0])[0][1];
	const { questions } = deck;

	return (
		<QuizView navigation={navigation} id={entryId} questions={questions} />
	);
};

function mapStateToProps({ decks }) {
	const decksArray = Object.entries(decks);
	return {
		decksArray
	};
}

export default connect(
	mapStateToProps,
	null
)(Quiz);
