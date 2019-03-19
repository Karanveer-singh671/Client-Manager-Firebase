import { DISABLE_BALANCE_ON_ADD, DISABLE_BALANCE_ON_EDIT, ALLOW_REGISTRATION } from './types';

export const setDisableBalanceOnAdd = () => {
	const settings = JSON.parse(localStorage.getItem('settings'));

	// Toggle
	settings.disableBalanceOnAdd = !settings.disableBalanceOnAdd;

	// Set back to localStorage
	localStorage.setItem('settings', JSON.stringify(settings));

	return {
		type: DISABLE_BALANCE_ON_ADD,
		// give payload to reducer
		payload: settings.disableBalanceOnAdd
	};
};

export const setDisableBalanceOnEdit = () => {
	return {
		type: DISABLE_BALANCE_ON_EDIT
	};
};
export const setAllowRegistration = () => {
	return {
		type: ALLOW_REGISTRATION
	};
};
