import { configureStore } from "@reduxjs/toolkit";
import deatlisSlice from "../routes/counter/counterSlice";

console.log("firstNameReducer", deatlisSlice);
export default configureStore({
  reducer: {
    name: deatlisSlice,
  },
});
