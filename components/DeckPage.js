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
import DeckViewDetails from "./DeckViewDetails";

const Container = styled.View`
	flex: 1;
	justify-content: space-between;
	align-items: center;
	margin: ${$marginLarge};
	padding: ${$paddingSmall};
`;

class DeckPage extends Component {
	static navigationOptions = () => {
		return {
			title: "Deck Page"
		};
	};

	handleDelete = id => {
		const { navigation, removeDeck } = this.props;
		removeDeck(id);
		return navigation.navigate("Home");
	};

	render() {
		const { navigation, stateArray } = this.props;
		const { handleDelete } = this;
		const { entryId } = navigation.state.params;
		const data = stateArray.filter(arr => entryId === arr[0])[0];

		if (data) {
			const [id, deck] = data;

			return (
				<Container>
					<View
						style={css`
							display: flex;
							align-items: center;
						`}
					>
						<DeckViewDetails
							title={deck.title}
							css={css`
								margin-bottom: 5px;
								font-size: ${$title};
								color: ${$secondary};
							`}
						/>
						<DeckViewDetails
							length={deck.questions.length}
							css={css`
								font-size: ${$text};
								color: ${$secondary};
							`}
						/>
					</View>
					<View>
						<Btn
							backgroundColor={$secondary}
							text="Add Card"
							onClick={() =>
								navigation.navigate("AddCard", {
									entryId: id
								})
							}
						/>
						<Btn
							backgroundColor={$secondary}
							text="Start Quiz"
							onClick={() => {
								if (!deck.questions.length) return;
								return navigation.navigate("Quiz", {
									entryId: id
								});
							}}
						/>
						<Button
							color={$danger}
							title="Delete Deck"
							onPress={() => handleDelete(id)}
						/>
					</View>
				</Container>
			);
		} else {
			return <Container>{null}</Container>;
		}
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
