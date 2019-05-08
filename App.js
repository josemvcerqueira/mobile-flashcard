import React, { Component } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { $secondary } from "./utils/theme";
import {
	AddCard,
	AddDeck,
	DeckPage,
	FlashCardStatusBar,
	Home
} from "./components";

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
					<AddDeck />
				</View>
			</Provider>
		);
	}
}
