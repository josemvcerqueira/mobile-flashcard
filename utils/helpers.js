import { AsyncStorage } from "react-native";
import { Notifications, Permissions } from "expo";

import { fetchDecks } from "./api";
import { getDecks } from "../actions";

const NOTIFICATION_KEY = "mobileFlashcard:notifications";

export function randomId() {
	return (
		Math.random()
			.toString(36)
			.substring(2, 15) +
		Math.random()
			.toString(36)
			.substring(2, 15)
	);
}

export async function handleInitialData() {
	const decks = await fetchDecks();
	getDecks(decks);
	return decks;
}

export function isEmpty(obj) {
	return Object.keys(obj).length;
}

export function createDeck(title) {
	return {
		id: randomId(),
		title,
		questions: []
	};
}

export function fromEntries(arr) {
	const obj = arr.reduce((acc, element) => {
		let key = element[0];
		acc[key] = element[1];
		return acc;
	}, {});

	return obj;
}

export function* generator(questions) {
	for (let question of questions) {
		yield question;
	}
}

export function calcScore(questions, correct) {
	const total = questions.length;
	return (correct / total) * 100;
}

export async function clearLocalNotification() {
	for (let i = 0; i < 3; i++) {
		try {
			await AsyncStorage.removeItem(NOTIFICATION_KEY);
			await Notifications.cancelAllScheduledNotificationsAsync();
			return true;
		} catch (error) {}
	}
	throw Error;
}

function createNotification() {
	return {
		title: "Study 🙂",
		body: "DO not forget to do a quiz today!",
		ios: {
			sound: true
		}
	};
}

export async function setLocalNotification() {
	try {
		const data = await AsyncStorage.getItem(NOTIFICATION_KEY);
		const parsedData = await JSON.parse(data);
		if (parsedData === null) {
			const { status } = await Permissions.askAsync(
				Permissions.NOTIFICATIONS
			);
			if (status === "granted") {
				Notifications.cancelAllScheduledNotificationsAsync();

				let tomorrow = new Date();
				tomorrow.setDate(tomorrow.getDate() + 1);
				tomorrow.setHours(13);
				tomorrow.setMinutes(30);

				Notifications.scheduleLocalNotificationAsync(
					createNotification(),
					{
						time: tomorrow
					}
				);
				AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
			}
		}
	} catch (error) {
		console.log(
			`There has been an error with your notification ${error.message}`
		);
		throw error;
	}
}
