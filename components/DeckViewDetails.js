import React from "react";
import { Text } from "react-native";

const DeckViewDetails = ({ css, title = null, length = null }) => (
	<Text style={css}>
		{title}
		{length === null
			? null
			: length === 1
			? `${length} Card`
			: `${length} Cards`}
	</Text>
);

export default DeckViewDetails;
