import React, { Component } from "react";
import { connect } from "react-redux";
import styled, { css } from "@emotion/native";
import { Animated, FlatList, View } from "react-native";

import {
	$marginLarge,
	$paddingSmall,
	$primary,
	$secondary,
	$title,
	$danger,
	$marginSmall
} from "../utils/theme";
import AnimatedView from "./AnimatedView";
import { isEmpty } from "../utils/helpers";
import { loadDecks } from "../actions";

const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	margin: ${$marginLarge};
	padidng-horizontal: ${$paddingSmall};
`;

const Error = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	margin: ${$marginLarge};
	padidng-horizontal: ${$paddingSmall};
	border-radius: 4;
	border: 1px solid ${$danger};
`;

const Title = styled.Text`
	color: ${$secondary};
	font-size: ${$title};
	text-align: center;
`;

const Loading = styled.ActivityIndicator`
	flex-direction: row;
	justify-content: space-around;
	padding: 10px;
`;

class Home extends Component {
	state = {
		bounceValue: new Animated.Value(1),
		idValue: 0
	};

	componentDidMount() {
		this.props.loadDecks();
	}

	renderDeck = ({ item }) => {
		const { navigation } = this.props;
		const [id, deck] = item;

		return (
			<AnimatedView
				key={id}
				deck={deck}
				id={id}
				navigation={navigation}
			/>
		);
	};

	render() {
		const { state } = this.props;
		const { renderDeck } = this;
		const { isLoading, error, decks } = state;

		const decksArr = Object.entries(decks);

		if (isLoading) {
			return (
				<Container>
					<Loading />
				</Container>
			);
		}

		if (!isEmpty(decks) && !isLoading) {
			return (
				<Container>
					<Title
						style={css`
							margin-bottom: ${$marginSmall};
						`}
						size="large"
						color={$primary}
					>
						Welcome!
					</Title>
					<Title size="large" color={$primary}>
						Start by adding a deck! 😊
					</Title>
				</Container>
			);
		}

		return (
			<View
				style={css`
					flex: 1;
				`}
			>
				<FlatList
					contentContainerStyle={css`
						justify-content: center;
						align-items: center;
					`}
					keyExtractor={item => {
						const [id] = item;
						return id;
					}}
					data={decksArr}
					renderItem={renderDeck}
				/>
				{error && <Error>{JSON.stringify(error)}</Error>}
			</View>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		loadDecks: () => dispatch(loadDecks())
	};
}

export default connect(
	state => ({ state }),
	mapDispatchToProps
)(Home);
