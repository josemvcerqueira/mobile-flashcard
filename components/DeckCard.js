import React from "react";
import styled, { css } from "@emotion/native";
import { $primary, $secondary, $title, $text } from "../utils/theme";

const Card = styled.View`
	width: 300px;
	height: 100px;
	background-color: ${$secondary};
	justify-content: center;
	align-items: center;
	padding: 20px;
	border-radius: 15px;
`;

const P = styled.Text`
	color: ${$primary};
`;

const DeckCard = () => {
	return (
		<Card>
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
		</Card>
	);
};

export default DeckCard;
