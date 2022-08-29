import { combineReducers } from "redux";
import reviewReducer from "./reviewReducer";
import menuReducer from "./menuReducer";
import storeReducer from "./storeReducer";

const rootReducer = combineReducers({
  menu: menuReducer,
  review: reviewReducer,
  store: storeReducer,
});
export default rootReducer;
