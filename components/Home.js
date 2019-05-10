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
		decks: {}
	};

	async componentDidMount() {
		const decks = await handleDecks();
		this.setState({
			decks
		});
	}

	render() {
		const { navigation, state } = this.props;
		const { decks } = this.state;
		console.log(decks, "from home");
		console.log(state, "HHHHHEERE");
		if (!isEmpty(decks) && !isEmpty(state)) {
			return (
				<Container>
					<Title>You have not created any decks!</Title>
				</Container>
			);
		}

		return (
			<Container>
				<Title>{JSON.stringify(state)}</Title>
			</Container>
		);
	}
}

function mapStateToProps(state) {
	return { state };
}

export default connect(mapStateToProps)(Home);
