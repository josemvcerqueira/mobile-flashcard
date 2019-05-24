import React, { Component } from "react";
import { connect } from "react-redux";
import { View, TouchableWithoutFeedback, Keyboard } from "react-native";
import styled from "@emotion/native";

import { addDeck } from "../actions";
import { $primary, $marginLarge, $secondary, $title } from "../utils/theme";
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

		const newDeck = createDeck(title);
		addDeck(newDeck);
		this.setState({ title: "" });
		navigation.goBack();
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
							value={title}
							color={$primary}
							backgroundColor={$secondary}
							text="Create Deck"
							onClick={handleNewDeck}
						/>
					</View>
				</TouchableWithoutFeedback>
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
