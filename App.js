import React, { Component } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { $white, $secondary } from "./utils/theme";
import {
	createBottomTabNavigator,
	createAppContainer,
	createStackNavigator
} from "react-navigation";
import {
	AddCard,
	AddDeck,
	DeckPage,
	FlashCardStatusBar,
	Home
} from "./components";
import { Ionicons } from "@expo/vector-icons";

const RouteConfiguration = {
	Home: {
		screen: Home,
		navigationOptions: {
			tabBarLabel: "Home",
			tabBarIcon: ({ tintColor }) => (
				<Ionicons
					name="ios-add-circle-outline"
					size={30}
					color={tintColor}
				/>
			)
		}
	},
	AddDeck: {
		screen: AddDeck,
		navigationOptions: {
			tabBarLabel: "Add Deck",
			tabBarIcon: ({ tintColor }) => (
				<Ionicons name="ios-bookmarks" size={30} color={tintColor} />
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
const MainNavigatior = createAppContainer(
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
		}
	})
);

const sagaMiddleware = createSagaMiddleware();
const store = createStore(function fn() {},
applyMiddleware(sagaMiddleware, logger));

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<View style={{ flex: 1 }}>
					<FlashCardStatusBar
						backgroundColor={$secondary}
						barStyle="light-content"
					/>
					<MainNavigatior />
				</View>
			</Provider>
		);
	}
}
