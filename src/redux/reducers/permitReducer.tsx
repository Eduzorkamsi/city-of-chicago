

import { Reducer } from "redux";
import { permit } from "../types/storeType";
import {
	gotPermits,
	toggleModalAction
} from "../types/actionsType";

type actions =
	| gotPermits
	| toggleModalAction;

const initialState: permit[] = [];

const permitReducer: Reducer<permit[], actions> = (
	state = initialState,
	action
) => {
	switch (action.type) {

		case "GOT_PERMITS":
			return [...action.permits];

		default:
			return [...state];
	}
};
export default permitReducer;