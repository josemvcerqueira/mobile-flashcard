import React, { Fragment } from "react";
import { Animated, Button, StyleSheet } from "react-native";
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
	flip,
	cssStyle
}) => (
	<Animated.View
		style={[
			styles.screen,
			cssStyle,
			subtitle === "Question" ? styles.back : {}
		]}
	>
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
		<Container>
			{question ? (
				<Fragment>
					<Div>
						<P
							style={css`
								margin-bottom: 10px;
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
				</Fragment>
			) : null}
		</Container>
	</Animated.View>
);

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center",
		justifyContent: "space-between",
		position: "relative",
		backfaceVisibility: "hidden"
	},
	back: {
		position: "absolute",
		top: 0
	}
});

export default QuizPage;
