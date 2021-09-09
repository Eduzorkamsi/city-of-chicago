import {
    toggleModalActionCreator,
    getPermitsActionCreator
} from "../types/actionCreatorTypes";



export const toggleModal: toggleModalActionCreator = (id) => {
    return {
        type: "TOGGLE_MODAL",
        id,
    };
};


export const getPermits: getPermitsActionCreator = (date) => {
    return {
        type: "GET_PERMITS",
        date
    };
};