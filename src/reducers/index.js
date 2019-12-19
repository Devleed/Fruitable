import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import signToggle from "./signToggle";
import isLoading from "./isLoading";
import fruits from "./getFruits";
import vegetables from "./getVegs";
import singleItem from "./singleItem";
import cartData from "./getCartData";

export default combineReducers({
  form: formReducer,
  signedInUser: signToggle,
  isLoading,
  fruits,
  vegetables,
  selectedItem: singleItem,
  userCart: cartData
});
