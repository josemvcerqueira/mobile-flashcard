import React from "react";
import styled from "@emotion/native";

import { $secondary } from "../utils/theme";

const P = styled.Text`
	color: ${$secondary};
`;

const DeckViewDetails = ({ css, title = null, length = null }) => (
	<P style={css}>
		{title}
		{length === null
			? null
			: length === 1
			? `${length} Card`
			: `${length} Cards`}
	</P>
);

export default DeckViewDetails;
