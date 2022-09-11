import { configureStore } from "@reduxjs/toolkit";
import firstNameSlice from "../routes/counter/counterSlice";

console.log("firstNameReducer", firstNameSlice);
export default configureStore({
  reducer: {
    details: firstNameSlice,
  },
});
