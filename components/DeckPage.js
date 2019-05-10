import React, { Component } from "react";
import { View, Button } from "react-native";
import styled, { css } from "@emotion/native";
import {
	$danger,
	$marginLarge,
	$paddingSmall,
	$secondary,
	$title,
	$text,
	$primary
} from "../utils/theme";
import Btn from "./Btn";

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

	render() {
		const { navigation } = this.props;
		return (
			<Container>
				<View>
					<P
						style={css`
							margin-bottom: 5px;
							font-size: ${$title};
						`}
					>
						Title
					</P>
					<P
						style={css`
							font-size: ${$text};
						`}
					>
						3 Cards
					</P>
				</View>
				<View>
					<Btn
						color={$primary}
						backgroundColor={$secondary}
						text="Add Card"
						onClick={() =>
							navigation.navigate("AddCard", { entry: 1 })
						}
					/>
					<Btn
						color={$secondary}
						backgroundColor={$primary}
						text="Start Quiz"
					/>
					<Button
						color={$danger}
						title="Delete Deck"
						onPress={() => console.log("pressed")}
					/>
				</View>
			</Container>
		);
	}
}

export default DeckPage;
