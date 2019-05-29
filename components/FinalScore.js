import React, { Component } from "react";
import styled, { css } from "@emotion/native";
import { connect } from "react-redux";

import { calcScore, setLocalNotification } from "../utils/helpers";

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
	state = {
		score: 0
	};

	static navigationOptions = {
		headerLeft: null,
		title: "Final Score"
	};

	componentDidMount() {
		const { navigation } = this.props;
		const { questions } = navigation.state.params;
		const { correct } = this.props.quiz;

		const score = calcScore(questions, correct);

		this.setState({ score });
	}

	render() {
		const { score } = this.state;

		const { navigation } = this.props;
		const { entryId } = navigation.state.params;

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
							this.props.reset() &&
							setLocalNotification() &&
							navigation.push("Quiz", { entryId: entryId })
						}
					/>
					<Btn
						backgroundColor={$danger}
						text="Back to Deck"
						onClick={() =>
							this.props.reset() &&
							setLocalNotification() &&
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
