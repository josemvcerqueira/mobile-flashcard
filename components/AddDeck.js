import React, { Component } from "react";
import { View, TouchableWithoutFeedback, Keyboard } from "react-native";
import styled from "@emotion/native";
import { $primary, $marginLarge, $secondary, $title } from "../utils/theme";
import Input from "./Input";
import Btn from "./Btn";

const Container = styled.KeyboardAvoidingView`
	flex: 1;
	margin: ${$marginLarge};
`;

const Title = styled.Text`
	color: ${$secondary};
	font-size: ${$title};
`;

class AddDeck extends Component {
	state = {
		title: ""
	};

	handleTitleInput = event => {
		const title = event.target.value;
		this.setState({
			title
		});
	};

	render() {
		const { title } = this.state;
		const { handleTitleInput } = this;
		return (
			<Container>
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
						<Title>What is the title of your new deck?</Title>
						<Input
							value={title}
							handleChange={handleTitleInput}
							color={$primary}
							placeholder="Title"
						/>
						<Btn
							color={$primary}
							backgroundColor={$secondary}
							text="Create Deck"
						/>
					</View>
				</TouchableWithoutFeedback>
			</Container>
		);
	}
}

export default AddDeck;
