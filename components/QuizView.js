import React, { Component } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import { css } from "@emotion/native";
import FlipCard from "react-native-flip-card";

import QuizPage from "./QuizPage";
import { generator } from "../utils/helpers";
import { addCorrectAnswer, addIncorrectAnswer, resetQuiz } from "../actions";

class QuizView extends Component {
	state = {
		question: "",
		answer: "",
		number: 1,
		QA: null,
		flip: true
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

	flipCard = () => {
		this.setState(prevState => ({ flip: !prevState.flip }));
	};

	render() {
		const { question, answer, number, flip } = this.state;
		const { questions } = this.props;
		const { nextQA, flipCard } = this;

		return (
			<View
				style={css`
					flex: 1;
				`}
			>
				<FlipCard
					flip={flip}
					friction={6}
					flipHorizontal={true}
					flipVertical={false}
					perspective={1000}
				>
					<QuizPage
						question={question}
						title={question}
						number={number}
						questions={questions}
						subtitle="Answer"
						nextQA={nextQA}
						flip={flipCard}
					/>
					<QuizPage
						question={question}
						title={answer}
						number={number}
						questions={questions}
						subtitle="Question"
						nextQA={nextQA}
						flip={flipCard}
					/>
				</FlipCard>
			</View>
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
