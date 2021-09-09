import { permit } from "../../redux/types/storeType";
import {
	getPermitsActionCreator,
	toggleModalActionCreator
} from "../../redux/types/actionCreatorTypes";

interface PermitPropType {
	permits: permit[];
	getPermits: getPermitsActionCreator;
	toggleModal: toggleModalActionCreator
}
export default PermitPropType;