import React from "react";
import { Text, View } from "react-native";
import styled, { css } from "@emotion/native";
import { $secondaryDark, $light } from "../utils/colors";
import Btn from "./Btn";

const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	margin: 10px;
	padding: 10px;
`;

const P = styled.Text`
	color: ${$secondaryDark};
`;

const DeckPage = () => {
	return (
		<Container>
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
			<Btn
				color={$secondaryDark}
				backgroundColor={$light}
				text="Add Card"
			/>
			<Btn
				color={$light}
				backgroundColor={$secondaryDark}
				text="Start Quiz"
			/>
		</Container>
	);
};

export default DeckPage;
