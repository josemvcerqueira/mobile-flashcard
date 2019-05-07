import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styled from "@emotion/native";

const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	margin: 10px;
`;

const Home = () => {
	return (
		<Container>
			<TouchableOpacity>
				<Text>I AM THE HOME COMPONENT</Text>
			</TouchableOpacity>
		</Container>
	);
};

export default Home;
