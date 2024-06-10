import { configureStore } from "@reduxjs/toolkit";
import moneyReducer from "../reducers/money.reducer";

export default configureStore({
  reducer: { money: moneyReducer },
});
