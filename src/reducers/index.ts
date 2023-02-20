import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import search from "./search";
import newsboards from "./newsboards";

export default combineReducers({
  auth,
  message,
  search,
  newsboards,
});
