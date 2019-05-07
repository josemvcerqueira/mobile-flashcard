import React from "react";
import { Text, View } from "react-native";
import styled, { css } from "@emotion/native";
import { $light, $dark } from "../utils/colors";

const Card = styled.View`
	width: 300px;
	height: 100px;
	background-color: ${$light};
	justify-content: center;
	align-items: center;
	padding: 20px;
	border-radius: 15px;
`;

const P = styled.Text`
	color: ${$dark};
`;

const DeckCard = () => {
	return (
		<Card>
			<P
				style={css`
					margin-bottom: 5px;
					font-size: 40px;
				`}
			>
				Title
			</P>
			<P
				style={css`
					font-size: 15px;
				`}
			>
				3 Cards
			</P>
		</Card>
	);
};

export default DeckCard;
