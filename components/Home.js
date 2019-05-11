import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "@emotion/native";
import {
	$marginSmall,
	$marginLarge,
	$paddingSmall,
	$shadow,
	$secondary,
	$title
} from "../utils/theme";
import DeckCard from "./DeckCard";
import { isEmpty } from "../utils/helpers";
import { getDecks } from "../actions";

const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	margin: ${$marginLarge};
	padidng-horizontal: ${$paddingSmall};
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

const Title = styled.Text`
	color: ${$secondary};
	font-size: ${$title};
`;

class Home extends Component {
	componentDidMount() {
		this.props.getDecks();
	}
	render() {
		const { navigation, state } = this.props;
		if (!isEmpty(state)) {
			return (
				<Container>
					<Title>You have not created any decks!</Title>
				</Container>
			);
		}

		return (
			<Container>
				{Object.entries(state).map(([id, deck]) => (
					<Button
						key={id}
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
	{ getDecks }
)(Home);
