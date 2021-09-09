
import { combineReducers } from "redux";

import permitReducer from "./permitReducer";

const store = {
    permits: permitReducer,
};

export default combineReducers(store);