import React from "react";
import {
	createBottomTabNavigator,
	createAppContainer,
	createStackNavigator
} from "react-navigation";
import { Ionicons } from "@expo/vector-icons";

import { $white, $secondary } from "./utils/theme";
import {
	AddCard,
	AddDeck,
	DeckPage,
	Home,
	Quiz,
	FinalScore
} from "./components";

const RouteConfiguration = {
	Home: {
		screen: Home,
		navigationOptions: {
			tabBarLabel: "Home",
			tabBarIcon: ({ tintColor }) => (
				<Ionicons name="ios-bookmarks" size={30} color={tintColor} />
			)
		}
	},
	AddDeck: {
		screen: AddDeck,
		navigationOptions: {
			tabBarLabel: "Add Deck",
			tabBarIcon: ({ tintColor }) => (
				<Ionicons
					name="ios-add-circle-outline"
					size={30}
					color={tintColor}
				/>
			)
		}
	}
};

const TabNavigatorConfig = {
	navigationOptions: {
		header: null
	},
	tabBarOptions: {
		activeTintColor: $secondary,
		style: {
			height: 56,
			backgroundColor: $white,
			shadowColor: "rgba(0,0,0,0.24)",
			shadowOffset: {
				width: 0,
				height: 3
			},
			shadowRadius: 6,
			shadowOpacity: 1
		}
	}
};

const AppContainer = createBottomTabNavigator(
	RouteConfiguration,
	TabNavigatorConfig
);
const MainNavigator = createAppContainer(
	createStackNavigator({
		Home: {
			screen: AppContainer
		},
		DeckPage: {
			screen: DeckPage,
			navigationOptions: {
				headerTintColor: $white,
				headerStyle: {
					backgroundColor: $secondary
				}
			}
		},
		AddCard: {
			screen: AddCard,
			navigationOptions: {
				headerTintColor: $white,
				headerStyle: {
					backgroundColor: $secondary
				}
			}
		},
		Quiz: {
			screen: Quiz,
			navigationOptions: {
				headerTintColor: $white,
				headerStyle: {
					backgroundColor: $secondary
				},
				headerLeft: null,
				title: "Quiz"
			}
		},
		FinalScore: {
			screen: FinalScore,
			navigationOptions: {
				headerTintColor: $white,
				headerStyle: {
					backgroundColor: $secondary
				}
			}
		}
	})
);

export default MainNavigator;
