import React, { Component } from "react";
import styled, { css } from "@emotion/native";
import { connect } from "react-redux";

import {
	calcScore,
	setLocalNotification,
	clearLocalNotification
} from "../utils/helpers";

import {
	$danger,
	$secondary,
	$title,
	$green,
	$marginLarge,
	$paddingSmall,
	$text
} from "../utils/theme";
import Btn from "./Btn";
import { resetQuiz } from "../actions";

const P = styled.Text`
	color: ${$secondary};
`;

const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: space-between;
	margin: ${$marginLarge};
	padding: ${$paddingSmall};
`;

const Div = styled.View`
	display: flex;
	flex: 1;
	align-items: center;
	justify-content: center;
`;

class FinalScore extends Component {
	static navigationOptions = {
		headerLeft: null,
		title: "Final Score"
	};

	async componentDidMount() {
		await clearLocalNotification();
		await setLocalNotification();
	}

	render() {
		const { navigation, reset } = this.props;
		const { entryId } = navigation.state.params;
		const { questions } = navigation.state.params;
		const { correct } = this.props.quiz;

		const score = calcScore(questions, correct);

		return (
			<Container>
				<Div>
					<P
						style={css`
							margin-bottom: 15px;
							font-size: ${$title};
						`}
					>
						Final Score
					</P>
					<P
						style={css`
							margin-bottom: 15px;
							font-size: ${$text};
						`}
					>
						{score}%
					</P>
				</Div>
				<Div>
					<Btn
						backgroundColor={$green}
						text="Restart Quiz"
						onClick={() =>
							reset() &&
							navigation.push("Quiz", { entryId: entryId })
						}
					/>
					<Btn
						backgroundColor={$danger}
						text="Back to Deck"
						onClick={() =>
							reset() &&
							navigation.navigate("DeckPage", {
								entryId: entryId
							})
						}
					/>
				</Div>
			</Container>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		reset: () => dispatch(resetQuiz())
	};
}

export default connect(
	({ quiz }) => ({ quiz }),
	mapDispatchToProps
)(FinalScore);
