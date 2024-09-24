import { combineReducers } from "redux";
import { cartreducer } from "./reducer";
import { ProductReducer } from "./productReducer";

const rootred = combineReducers({
  cartreducer,
  ProductReducer,
});

export default rootred;
