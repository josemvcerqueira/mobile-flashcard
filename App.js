import React from "react";
import { Text, View } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import FlashCardStatusBar from "./components/StatusBar";
import { secondaryDarkColor } from "./utils/colors";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(function fn() {},
applyMiddleware(sagaMiddleware, logger));

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<View style={{ flex: 1 }}>
					<FlashCardStatusBar
						backgroundColor={secondaryDarkColor}
						barStyle="light-content"
					/>
					<Text>Open up App.js to start working on your app!</Text>
				</View>
			</Provider>
		);
	}
}
