import React, { Component } from "react";
import { connect } from "react-redux";
import { Animated, View } from "react-native";
import { css } from "@emotion/native";

import QuizPage from "./QuizPage";
import { generator } from "../utils/helpers";
import { addCorrectAnswer, addIncorrectAnswer, resetQuiz } from "../actions";

class QuizView extends Component {
	state = {
		question: "",
		answer: "",
		number: 1,
		QA: null
	};

	animatedValue = new Animated.Value(0);
	value = 0;

	frontInterpolate = this.animatedValue.interpolate({
		inputRange: [0, 180],
		outputRange: ["0deg", "180deg"]
	});
	backInterpolate = this.animatedValue.interpolate({
		inputRange: [0, 180],
		outputRange: ["180deg", "360deg"]
	});

	componentDidMount() {
		const { questions } = this.props;
		const QA = generator(questions);
		const { question, answer } = QA.next().value;

		this.animatedValue.addListener(({ value }) => {
			this.value = value;
		});

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
		if (this.value >= 90) {
			Animated.timing(this.animatedValue, {
				tovalue: 0,
				friction: 8,
				tension: 10
			}).start();
		} else {
			Animated.timing(this.animatedValue, {
				tovalue: 180,
				friction: 8,
				tension: 10
			}).start();
		}
	};

	render() {
		const { question, answer, number } = this.state;
		const { questions } = this.props;
		const { nextQA, flipCard } = this;

		const frontAnimatedStyle = {
			transform: [{ rotateX: this.frontInterpolate }]
		};

		const backAnimatedStyle = {
			transform: [{ rotateX: this.backInterpolate }]
		};

		return (
			<View
				style={css`
					flex: 1;
					position: relative;
				`}
			>
				<QuizPage
					question={question}
					title={question}
					number={number}
					questions={questions}
					subtitle="Answer"
					nextQA={nextQA}
					cssStyle={frontAnimatedStyle}
					flip={flipCard}
				/>
				<QuizPage
					question={question}
					title={answer}
					number={number}
					questions={questions}
					subtitle="Question"
					nextQA={nextQA}
					cssStyle={backAnimatedStyle}
					flip={flipCard}
				/>
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
