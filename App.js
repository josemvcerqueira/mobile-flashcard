import React, { Component } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas";
import rootReducer from "./reducers";
import MainNavigator from "./MainNavigator";
import { $secondary } from "./utils/theme";
import { FlashCardStatusBar } from "./components";
import { setLocalNotification } from "./utils/helpers";

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
					<MainNavigator />
				</View>
			</Provider>
		);
	}
}

export default App;
