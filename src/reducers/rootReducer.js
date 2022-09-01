import { combineReducers } from "redux";
import reviewReducer from "./reviewReducer";
import menuReducer from "./menuReducer";
import storeReducer from "./storeReducer";
import cartReducer from "./cartReducer";
import orderReducer from "./orderReducer";

const rootReducer = combineReducers({
  menu: menuReducer,
  review: reviewReducer,
  store: storeReducer,
  cart: cartReducer,
  order: orderReducer,
});
export default rootReducer;
