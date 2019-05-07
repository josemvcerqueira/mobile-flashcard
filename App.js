import React, { Component } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { $secondaryDark } from "./utils/colors";
import FlashCardStatusBar from "./components/StatusBar";
import Home from "./components/Home";
import DeckPage from "./components/DeckPage";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(function fn() {},
applyMiddleware(sagaMiddleware, logger));

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<View style={{ flex: 1 }}>
					<FlashCardStatusBar
						backgroundColor={$secondaryDark}
						barStyle="light-content"
					/>
					<DeckPage />
				</View>
			</Provider>
		);
	}
}
