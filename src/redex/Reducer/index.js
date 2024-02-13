import { combineReducers } from "redux";
import LogIn from "./LoginAuth";
import goalAdder from "./goal";
import ProfileStore from "./UserProfile";
const rootReducer = combineReducers({
  LogIn,
  ProfileStore,
  goalAdder,
});
export default rootReducer;
