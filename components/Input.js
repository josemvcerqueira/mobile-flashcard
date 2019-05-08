import React from "react";
import styled from "@emotion/native";
import { $marginSmall, $paddingSmall } from "../utils/theme";

const StyledInput = styled.TextInput`
	height: 50px;
	width: 300px;
	border-width: 0.9px;
	margin: ${$marginSmall};
	padding: ${$paddingSmall};
`;

const Input = ({ value, handleChange, color, placeholder }) => {
	return (
		<StyledInput
			value={value}
			onChange={handleChange}
			placeholder={placeholder}
			enablesReturnKeyAutomatically={true}
			selectionColor={color}
			borderColor={color}
		/>
	);
};

export default Input;
