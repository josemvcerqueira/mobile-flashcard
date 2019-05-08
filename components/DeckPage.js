import React from "react";
import { Text, View, Button } from "react-native";
import styled, { css } from "@emotion/native";
import {
	$danger,
	$margin,
	$padding,
	$secondary,
	$title,
	$text,
	$primary
} from "../utils/theme";
import Btn from "./Btn";

const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	margin: ${$margin};
	padding: ${$padding};
`;

const P = styled.Text`
	color: ${$secondary};
`;

const DeckPage = () => {
	return (
		<Container>
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
			<Btn
				color={$primary}
				backgroundColor={$secondary}
				text="Add Card"
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
		</Container>
	);
};

export default DeckPage;
