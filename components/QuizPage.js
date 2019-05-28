import React, { Fragment } from "react";
import { Button } from "react-native";
import styled, { css } from "@emotion/native";

import {
	$danger,
	$secondary,
	$title,
	$green,
	$marginLarge,
	$paddingSmall
} from "../utils/theme";
import Btn from "./Btn";

const P = styled.Text`
	color: ${$secondary};
`;

const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: space-between;
	margin: ${$marginLarge};
	padding: ${$paddingSmall};
`;

const Div = styled.View`
	display: flex;
	flex: 1;
	align-items: center;
	justify-content: center;
`;

const QuizPage = ({
	title,
	number,
	question,
	questions,
	subtitle,
	nextQA,
	flip
}) => (
	<Fragment>
		{question ? (
			<P
				style={css`
					font-size: 20px;
					position: absolute;
					top: 8px;
					left: 8px;
					font-weight: bold;
				`}
			>
				{number}/{questions.length}
			</P>
		) : null}
		{question ? (
			<Container>
				<Div>
					<P
						style={css`
							margin-bottom: 15px;
							font-size: ${$title};
						`}
					>
						{title}
					</P>
					<Button
						color={$danger}
						title={subtitle}
						onPress={() => flip()}
					/>
				</Div>
				<Div>
					<Btn
						backgroundColor={$green}
						text="Correct"
						onClick={() => nextQA("correct")}
					/>
					<Btn
						backgroundColor={$danger}
						text="Incorrect"
						onClick={() => nextQA("incorrect")}
					/>
				</Div>
			</Container>
		) : null}
	</Fragment>
);

export default QuizPage;
