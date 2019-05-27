import React, { Component } from "react";
import styled, { css } from "@emotion/native";
import { Button } from "react-native";

import {
	$danger,
	$marginLarge,
	$paddingSmall,
	$secondary,
	$title,
	$text,
	$primary
} from "../utils/theme";
import Btn from "./Btn";
import { generator } from "../utils/helpers";

const P = styled.Text`
	color: ${$secondary};
`;

const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: space-between;
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
		QA: null,
		title: "answer"
	};
	componentDidMount() {
		const { questions } = this.props;
		const QA = generator(questions);
		const { question, answer } = QA.next().value;

		this.setState({ question, answer, QA });
	}

	nextQA = () => {
		const { QA } = this.state;

		const result = QA.next().value;

		if (result) {
			const { question, answer } = result;
			this.setState({ question, answer });
		} else {
			this.setState({ question: "", answer: "" });
		}
	};

	render() {
		const { question, title } = this.state;
		const { nextQA } = this;

		return (
			<Container>
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
						onClick={() => nextQA()}
					/>
					<Btn
						backgroundColor={$danger}
						text="Incorrect"
						onClick={() => console.log("incorrect")}
					/>
				</Div>
			</Container>
		);
	}
}

export default QuizView;
