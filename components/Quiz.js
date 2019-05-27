import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "@emotion/native";

import QuizView from "./QuizView";
import { $marginLarge, $paddingSmall } from "../utils/theme";

const Container = styled.View`
	flex: 1;
	justify-content: space-between;
	align-items: center;
	margin: ${$marginLarge};
	padding: ${$paddingSmall};
`;

class Quiz extends Component {
	render() {
		const { decksArray, navigation } = this.props;

		const { entryId } = navigation.state.params;

		const deck = decksArray.filter(arr => entryId === arr[0])[0][1];
		const { questions } = deck;

		return (
			<Container>
				<QuizView questions={questions} />
			</Container>
		);
	}
}

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
