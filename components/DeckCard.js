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

const DeckCard = ({ deck }) => (
	<Card>
		<P
			style={css`
				margin-bottom: 5px;
				font-size: ${$title};
			`}
		>
			{deck.title}
		</P>
		{deck.questions.length === 1 ? (
			<P
				style={css`
					font-size: ${$text};
				`}
			>
				{deck.questions.length} Card
			</P>
		) : (
			<P
				style={css`
					font-size: ${$text};
				`}
			>
				{deck.questions.length} Cards
			</P>
		)}
	</Card>
);

export default DeckCard;
