# Mobile Flashcards

This project was bootstrapped with [Create React App](https://github.com/react-community/create-react-native-app) and was built to be tested on IOS.

This web application allows the user to:

-   Create decks
-   Add cards to the decks
-   Start a quiz based on the cards
-   Delete decks

## Technology Stack

-   React for the view library
-   React Native for the native features
-   Redux for state management
-   Emotion for styling
-   Redux Saga for async calls

## TL;DR

To run the project right away:

-   clone the repo with `git clone https://github.com/react-community/create-react-native-app.git`
-   install all project dependencies with `yarn install`
-   start the development server with `yarn start`

## What You're Getting

The app is organized using the "Rails Style"

```bash

├── .expo
├── .actions # All actions to the redux store
├── assets
├── components # All React components
├── constants # All constants for the redux store actions
├── reducers # All state management logic for the redux store
├── sagas # Redux saga middleware
├── utils
│   ├── api.js # AsyncStorage logic
│   ├── helpers.js # Helper functions
│   └── theme.js # All the styles used in the app
├── .eslintrc
├── .gitignore
├── .watchmanconfig
├── App.js # React Navigation, Redux Store and entry point of the app
├── App.json
├── babel.config.js
├── package.json
├── README.md # this file
└── yarn.lock

```

## Pseudo Backend Server

The provided file [`api.js`](/utils/api.js) contains the methods you will need to perform necessary operations on the backend:

-   [`fetchDecks()`] - fetches the initial data from the AsyncStorage
-   [`addDeck({ id, title, questions })`] - saves a new deck to the AsyncStorage
-   [`addCard({ id, question, answer })`] - saves a card to the AsyncStorage
-   [`removeDeck(id)`] - removes a card from the AsyncStorage

The provided file [`helpers.js`](/utils/helpers.js) contains the methods you will need to perform necessary logic operations in the app:

-   [`randomId()`] - generates a random ID to label the decks
-   [`handleInitialData()`] - handles the initial data upon starting the app
-   [`isEmpty(obj)`] - checks if an object has any properties
-   [`createDeck(title)`] - returns a deck object
-   [`fromEntries(arr)`] - transforms an array back to an object
-   [`generator(questions)`] - allows to control the output of questions for the quiz
-   [`calcScore(questions, correct)`] - calculates the final score
-   [`clearLocalNotification()`] - clears all notifications
-   [`createNotification()`] - returns a notification object
-   [`setLocalNotification()`] - sets a local notification

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open on IOS emulator

## Purpose

This repository is for educational purposes and part of the udacity curriculum.
