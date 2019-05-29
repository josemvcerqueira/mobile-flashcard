import React, { Component } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import {
	createBottomTabNavigator,
	createAppContainer,
	createStackNavigator
} from "react-navigation";
import { Ionicons } from "@expo/vector-icons";

import rootSaga from "./sagas";
import rootReducer from "./reducers";
import { $white, $secondary } from "./utils/theme";
import {
	AddCard,
	AddDeck,
	DeckPage,
	FlashCardStatusBar,
	Home,
	Quiz,
	FinalScore
} from "./components";
import { setLocalNotification } from "./utils/helpers";

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

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

class App extends Component {
	componentDidMount() {
		setLocalNotification();
	}

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

export default App;
