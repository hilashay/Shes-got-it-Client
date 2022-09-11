import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../routes/counter/counterSlice";

console.log("counterReducer", counterReducer);
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
