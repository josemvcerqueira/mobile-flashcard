import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Button } from "react-native";
import styled, { css } from "@emotion/native";

import {
	$danger,
	$marginLarge,
	$paddingSmall,
	$secondary,
	$title,
	$text
} from "../utils/theme";
import Btn from "./Btn";
import { removeDeck } from "../actions";

const Container = styled.View`
	flex: 1;
	justify-content: space-between;
	align-items: center;
	margin: ${$marginLarge};
	padding: ${$paddingSmall};
`;

const P = styled.Text`
	color: ${$secondary};
`;

class DeckPage extends Component {
	static navigationOptions = () => {
		return {
			title: "Deck Page"
		};
	};

	shouldComponentUpdate(nextProps) {
		if (this.props.state !== nextProps.state) return true;
		return false;
	}

	render() {
		const { navigation, stateArray, removeDeck } = this.props;
		const { addCard } = this;
		const { entryId } = navigation.state.params;

		const data = stateArray.filter(arr => entryId === arr[0])[0];

		const [id, deck] = data;

		return (
			<Container>
				<View
					style={css`
						display: flex;
						align-items: center;
					`}
				>
					<P
						style={css`
							margin-bottom: 10px;
							font-size: ${$title};
						`}
					>
						{deck.title}
					</P>
					<P
						style={css`
							font-size: ${$text};
						`}
					>
						{deck.hasOwnProperty("question")
							? deck.question.length
							: 0}{" "}
						Cards
					</P>
				</View>
				<View>
					<Btn
						backgroundColor={$secondary}
						text="Add Card"
						onClick={() =>
							navigation.navigate("AddCard", { entry: id })
						}
					/>
					<Btn backgroundColor={$secondary} text="Start Quiz" />
					<Button
						color={$danger}
						title="Delete Deck"
						onPress={() => {
							removeDeck(id);
							navigation.navigate("Home");
						}}
					/>
				</View>
			</Container>
		);
	}
}

function mapStateToProps({ decks }) {
	const stateArray = Object.entries(decks);
	return {
		stateArray
	};
}

function mapDispatchToProps(dispatch) {
	return {
		removeDeck: id => dispatch(removeDeck(id))
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DeckPage);
