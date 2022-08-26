import { combineReducers } from "redux";
import reviewReducer from "./reviewReducer";
import menuReducer from "./menuReducer";

const rootReducer = combineReducers({
  menu: menuReducer,
  review: reviewReducer,
});
export default rootReducer;
