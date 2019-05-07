import React from "react";
import { Button } from "react-native";
import styled, { css } from "@emotion/native";

const Container = styled.View`
	width: 250px;
	height: 70px;
	justify-content: center;
	align-items: center;
	border-radius: 25px;
	margin: 10px;
`;

const Btn = ({ color, backgroundColor, text }) => {
	return (
		<Container
			style={css`
				background-color: ${backgroundColor};
			`}
		>
			<Button
				onPress={() => console.log("pressed")}
				title={text}
				color={color}
			/>
		</Container>
	);
};

export default Btn;
