import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "@emotion/native";

import {
	$marginSmall,
	$marginLarge,
	$paddingSmall,
	$shadow,
	$primary,
	$secondary,
	$title
} from "../utils/theme";
import DeckCard from "./DeckCard";
import { isEmpty } from "../utils/helpers";
import { handleInitialData } from "../actions";

const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	margin: ${$marginLarge};
	padidng-horizontal: ${$paddingSmall};
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

const Button = styled.TouchableOpacity`
	alignitems: "center";
	margin: ${$marginSmall};
	shadow-color: ${$shadow};
	shadow-offset: 0px 2px;
	shadow-opacity: 0.25px;
	shadow-radius: 1px;
	elevation: 7px;
`;

class Home extends Component {
	constructor(props) {
		super(props);
		this.props.handleInitialData();
	}

	shouldComponentUpdate(nextProps) {
		if (this.props.state !== nextProps.state) {
			return true;
		}
		return false;
	}

	render() {
		const { navigation, state } = this.props;

		if (!isEmpty(state)) {
			return (
				<Container>
					<Title size="large" color={$primary}>
						Welcome! Start by adding a deck! 😊
					</Title>
				</Container>
			);
		}

		return (
			<Container>
				{Object.entries(state).map(([id, deck]) => (
					<Button
						key={id}
						color={$primary}
						onPress={() =>
							navigation.navigate("DeckPage", { entryId: id })
						}
					>
						<DeckCard deck={deck} />
					</Button>
				))}
			</Container>
		);
	}
}

export default connect(
	state => ({ state }),
	{ handleInitialData }
)(Home);
