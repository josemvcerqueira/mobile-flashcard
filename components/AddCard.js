import React, { Component, Fragment } from "react";
import { View, TouchableWithoutFeedback, Keyboard } from "react-native";
import styled from "@emotion/native";
import {
	$primary,
	$marginLarge,
	$white,
	$secondary,
	$danger
} from "../utils/theme";
import { Header } from "react-navigation";
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

	handleQuestionInput = event => {
		const question = event.target.value;
		this.setState({ question });
	};

	handleAnswerInput = event => {
		const answer = event.target.value;
		this.setState({ answer });
	};

	render() {
		const { question, answer } = this.state;
		const { handleQuestionInput, handleAnswerInput } = this;
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
							color={$white}
							backgroundColor={$secondary}
							text="Submit"
						/>
					</View>
				</TouchableWithoutFeedback>
			</Container>
		);
	}
}

export default AddCard;
