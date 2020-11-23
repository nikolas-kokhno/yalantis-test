import { combineReducers } from "redux";
import usersReduces from "./users";

const rootReducers = combineReducers({
  users: usersReduces,
});

export default rootReducers;
