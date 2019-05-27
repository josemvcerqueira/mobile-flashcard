import React, { Component, Fragment } from "react";
import styled, { css } from "@emotion/native";
import { Button } from "react-native";
import { connect } from "react-redux";

import {
	$danger,
	$secondary,
	$title,
	$primary,
	$marginLarge,
	$paddingSmall
} from "../utils/theme";
import Btn from "./Btn";
import { generator } from "../utils/helpers";
import { addCorrectAnswer, addIncorrectAnswer, resetQuiz } from "../actions";

const Screen = styled.View`
	flex: 1;
	align-items: center;
	justify-content: space-between;
	position: relative;
`;

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
	align-items: center;
	justify-content: center;
`;

class QuizView extends Component {
	state = {
		question: "",
		answer: "",
		number: 1,
		QA: null,
		title: "answer"
	};

	componentDidMount() {
		const { questions } = this.props;
		const QA = generator(questions);
		const { question, answer } = QA.next().value;

		this.setState({ question, answer, QA });
	}

	nextQA = action => {
		const { QA } = this.state;
		const { addCorrectAnswer, addIncorrectAnswer } = this.props;

		action === "correct" ? addCorrectAnswer() : addIncorrectAnswer();

		const result = QA.next().value;

		if (result) {
			const { question, answer } = result;
			this.setState(prevState => ({
				question,
				answer,
				number: prevState.number + 1
			}));
		} else {
			this.setState({ question: "", answer: "" });
		}
	};

	render() {
		const { question, title, number } = this.state;
		const { questions, correct, incorrect } = this.props;
		const { nextQA } = this;

		console.log(correct);
		console.log(incorrect);
		return (
			<Screen>
				{question ? (
					<P
						style={css`
							font-size: 20px;
							position: absolute;
							top: 8px;
							left: 8px;
							font-weight: bold;
						`}
					>
						{number}/{questions.length}
					</P>
				) : null}
				<Container>
					{question ? (
						<Fragment>
							<Div>
								<P
									style={css`
										margin-bottom: 10px;
										font-size: ${$title};
									`}
								>
									{question}
								</P>
								<Button
									color={$danger}
									title={title}
									onPress={() => {
										console.log("answer");
									}}
								/>
							</Div>
							<Div>
								<Btn
									backgroundColor={$primary}
									text="Correct"
									onClick={() => nextQA("correct")}
								/>
								<Btn
									backgroundColor={$danger}
									text="Incorrect"
									onClick={() => nextQA("incorrect")}
								/>
							</Div>
						</Fragment>
					) : null}
				</Container>
			</Screen>
		);
	}
}

function mapStateToProps({ quiz }) {
	const { correct, incorrect } = quiz;

	return {
		correct,
		incorrect
	};
}

function mapDispatchToProps(dispatch) {
	return {
		resetQuiz: () => dispatch(resetQuiz()),
		addCorrectAnswer: () => dispatch(addCorrectAnswer()),
		addIncorrectAnswer: () => dispatch(addIncorrectAnswer())
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(QuizView);
