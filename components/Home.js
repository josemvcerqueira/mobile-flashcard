import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "@emotion/native";
import DeckCard from "./DeckCard";
import { $shadow } from "../utils/colors";

const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	margin: 10px;
	padidng-horizontal: 10px;
`;

const Button = styled.TouchableOpacity`
	alignitems: "center";
	margin: 10px;
	shadow-color: ${$shadow};
	shadow-offset: 0px 2px;
	shadow-opacity: 0.25px;
	shadow-radius: 1px;
	elevation: 7px;
`;

const Home = () => {
	return (
		<Container>
			<Button onPress={() => console.log("pressed")}>
				<DeckCard />
			</Button>
		</Container>
	);
};

export default Home;
