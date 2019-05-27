import React, { Component } from "react";
import styled from "@emotion/native";
import { Animated } from "react-native";

import { $marginSmall, $shadow, $primary, $transparent } from "../utils/theme";
import DeckCard from "./DeckCard";

const Button = styled.TouchableHighlight`
	align-items: center;
	margin: ${$marginSmall};
	shadow-color: ${$shadow};
	shadow-offset: 0px 2px;
	shadow-opacity: 0.25px;
	shadow-radius: 1px;
	elevation: 7px;
`;

class AnimatedView extends Component {
	state = {
		bounceValue: new Animated.Value(1)
	};

	animation = id => {
		const { navigation } = this.props;
		const { bounceValue } = this.state;

		Animated.sequence([
			Animated.timing(bounceValue, { duration: 200, toValue: 1.04 }),
			Animated.spring(bounceValue, { toValue: 1, friction: 4 })
		]).start();

		setTimeout(() => navigation.navigate("DeckPage", { entryId: id }), 600);
	};

	render() {
		const { deck, id } = this.props;
		const { animation } = this;
		const { bounceValue } = this.state;

		return (
			<Animated.View
				key={id}
				style={{ transform: [{ scale: bounceValue }] }}
			>
				<Button
					underlayColor={$transparent}
					color={$primary}
					onPress={() => animation(id)}
				>
					<DeckCard deck={deck} />
				</Button>
			</Animated.View>
		);
	}
}

export default AnimatedView;
