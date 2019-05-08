import React from "react";
import styled from "@emotion/native";
import { $marginSmall, $marginLarge, $padding, $shadow } from "../utils/theme";
import DeckCard from "./DeckCard";

const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	margin: ${$marginLarge};
	padidng-horizontal: ${$padding};
`;

const Button = styled.TouchableOpacity`
	alignitems: "center";
	margin: ${$marginSmall};
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
