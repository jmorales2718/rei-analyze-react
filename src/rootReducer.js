import { combineReducers } from "redux";
import user from "./reducers/user";
import search from "./reducers/search";

export default combineReducers({
	user,
	search
});
