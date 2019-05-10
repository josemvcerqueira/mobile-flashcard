import React, { Component } from "react";
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
import { handleDecks, isEmpty } from "../utils/helpers";

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
	state = {
		decks: null
	};

	async componentDidMount() {
		const decks = handleDecks();
		this.setState({
			decks
		});
	}

	render() {
		const { navigation } = this.props;
		const { decks } = this.state;

		if (!isEmpty(decks)) {
			<Container>
				<Title>You have not created any decks!</Title>
			</Container>;
		}

		return (
			<Container>
				{Object.entries(decks).map(([id, deck]) => (
					<Button
						key={id}
						onPress={() =>
							navigation.navigate("DeckPage", { entryId: 1 })
						}
					>
						<DeckCard deck={deck} />
					</Button>
				))}
			</Container>
		);
	}
}

export default Home;
