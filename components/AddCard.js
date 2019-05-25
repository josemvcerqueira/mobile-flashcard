import React, { Component } from "react";
import { View, TouchableWithoutFeedback, Keyboard } from "react-native";
import styled from "@emotion/native";
import { Header } from "react-navigation";
import { connect } from "react-redux";

import { addCard } from "../actions";
import { $primary, $marginLarge, $secondary } from "../utils/theme";
import Input from "./Input";
import Btn from "./Btn";

const Container = styled.KeyboardAvoidingView`
	flex: 1;
	margin: ${$marginLarge};
`;

class AddCard extends Component {
	state = {
		question: "",
		answer: ""
	};

	static navigationOptions = () => {
		return {
			title: "Add Card"
		};
	};

	handleQuestionInput = question => {
		this.setState({ question });
	};

	handleAnswerInput = answer => {
		this.setState({ answer });
	};

	handleAddCard = () => {
		const { entryId } = this.props.navigation.state.params;
		const question = this.state.question;
		const answer = this.state.answer;

		const card = { question, answer, id: entryId };
		this.props.addCard(card);
		this.props.navigation.navigate("DeckPage", { entryId: entryId });
	};

	render() {
		const { question, answer } = this.state;
		const { handleQuestionInput, handleAnswerInput, handleAddCard } = this;

		const value = question.length > 0 && answer.length > 0;

		return (
			<Container
				behavior="padding"
				enabled
				keyboardVerticalOffset={Header.HEIGHT + 20}
			>
				<TouchableWithoutFeedback
					style={{ flex: 1 }}
					onPress={Keyboard.dismiss}
					accessible={false}
				>
					<View
						style={{
							flex: 1,
							alignItems: "center",
							justifyContent: "space-between"
						}}
					>
						<View>
							<Input
								value={question}
								handleChange={handleQuestionInput}
								color={$primary}
								placeholder="Question"
							/>
							<Input
								value={answer}
								handleChange={handleAnswerInput}
								color={$primary}
								placeholder="Answer"
							/>
						</View>
						<Btn
							onClick={handleAddCard}
							value={value}
							backgroundColor={$secondary}
							text="Submit"
						/>
					</View>
				</TouchableWithoutFeedback>
			</Container>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		addCard: card => dispatch(addCard(card))
	};
}

export default connect(
	null,
	mapDispatchToProps
)(AddCard);
