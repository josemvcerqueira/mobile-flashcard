import React, { Component } from "react";
import { connect } from "react-redux";
import { View, TouchableWithoutFeedback, Keyboard } from "react-native";
import styled, { css } from "@emotion/native";
import Toast from "react-native-easy-toast";

import { addDeck } from "../actions";
import {
	$primary,
	$marginLarge,
	$secondary,
	$title,
	$danger
} from "../utils/theme";
import { createDeck } from "../utils/helpers";
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

	handleTitleInput = title => {
		this.setState({ title });
	};

	handleNewDeck = () => {
		const { title } = this.state;
		const { addDeck, navigation } = this.props;

		if (!title) {
			this.refs.toast.show("Please provide a title! 👩‍🎤");
			return;
		}

		const newDeck = createDeck(title);
		addDeck(newDeck);
		this.setState({ title: "" });
		navigation.navigate("DeckPage", { entryId: newDeck.id });
	};

	render() {
		const { title } = this.state;
		const { handleTitleInput, handleNewDeck } = this;
		return (
			<Container behavior="padding" enabled keyboardVerticalOffset={20}>
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
							backgroundColor={$secondary}
							text="Create Deck"
							onClick={handleNewDeck}
						/>
					</View>
				</TouchableWithoutFeedback>
				<Toast
					position={"center"}
					ref="toast"
					style={css`
						background-color: ${$danger};
					`}
				/>
			</Container>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	addDeck: newDeck => dispatch(addDeck(newDeck))
});

export default connect(
	null,
	mapDispatchToProps
)(AddDeck);
