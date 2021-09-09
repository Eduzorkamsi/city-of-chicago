import { permit } from "./storeType";

// For Action Creator


export interface toggleModalAction {
    type: "TOGGLE_MODAL";
    id: string;
}

export interface getPermits {
    type: "GET_PERMITS";
    date: string

}

export interface gotPermits {
    type: "GOT_PERMITS";
    permits: permit[];
}

// For Reducers
export const actionIds = {
    GET_PERMITS: "GET_PERMITS",
    TOGGLE_MODAL: "TOGGLE_MODAL",

};