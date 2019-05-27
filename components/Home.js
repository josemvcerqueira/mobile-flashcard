import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "@emotion/native";
import { Animated } from "react-native";

import {
	$marginLarge,
	$paddingSmall,
	$primary,
	$secondary,
	$title,
	$danger
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

	render() {
		const { state, navigation } = this.props;

		const { isLoading, error, decks } = state;

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
					<Title size="large" color={$primary}>
						Welcome! Start by adding a deck! 😊
					</Title>
				</Container>
			);
		}

		console.log(decks);

		return (
			<Container>
				{Object.entries(decks).map(([id, deck]) => (
					<AnimatedView
						key={id}
						deck={deck}
						id={id}
						navigation={navigation}
					/>
				))}
				{error && <Error>{JSON.stringify(error)}</Error>}
			</Container>
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
