import { configureStore } from "@reduxjs/toolkit";
import detailsSlice from "../routes/redux/detailsSlice";

console.log("firstNameReducer", detailsSlice);
export default configureStore({
  reducer: {
    details: detailsSlice,
  },
});
