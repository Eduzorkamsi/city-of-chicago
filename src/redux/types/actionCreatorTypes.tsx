
import {
    toggleModalAction,
    getPermits
} from "./actionsType";

export type toggleModalActionCreator = (id: string) => toggleModalAction;

export type getPermitsActionCreator = (date: string) => getPermits;