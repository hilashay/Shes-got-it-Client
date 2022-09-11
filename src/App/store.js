import { configureStore } from "@reduxjs/toolkit";
import detailsSlice from "../routes/counter/counterSlice";

console.log("firstNameReducer", detailsSlice);
export default configureStore({
  reducer: {
    details: detailsSlice,
  },
});
