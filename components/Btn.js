import React from "react";
import { Button, TouchableOpacity } from "react-native";
import styled, { css } from "@emotion/native";

import { $marginSmall } from "../utils/theme";

const Container = styled.View`
	width: 250px;
	height: 60px;
	justify-content: center;
	border-radius: 10px;
	margin: ${$marginSmall};
`;

const Btn = ({ backgroundColor, text, value = true, onClick }) => {
	return (
		<TouchableOpacity>
			<Container
				style={css`
					background-color: ${backgroundColor};
					z-index: -100;
				`}
			>
				<Button
					disabled={value ? false : true}
					onPress={onClick}
					title={text}
				/>
			</Container>
		</TouchableOpacity>
	);
};

export default Btn;
