import React from "react";
import styled, { css } from "@emotion/native";

import { $primary, $secondary, $title, $text } from "../utils/theme";
import DeckViewDetails from "./DeckViewDetails";

const Card = styled.View`
	width: 300px;
	height: 100px;
	background-color: ${$secondary};
	justify-content: center;
	align-items: center;
	padding: 20px;
	border-radius: 15px;
`;

const DeckCard = ({ deck }) => (
	<Card>
		<DeckViewDetails
			title={deck.title}
			css={css`
				margin-bottom: 5px;
				font-size: ${$title};
				color: ${$primary};
			`}
		/>
		<DeckViewDetails
			length={deck.questions.length}
			css={css`
				font-size: ${$text};
				color: ${$primary};
			`}
		/>
	</Card>
);

export default DeckCard;
