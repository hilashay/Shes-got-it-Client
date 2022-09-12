import { createSlice } from "@reduxjs/toolkit";

export const detailsSlice = createSlice({
  name: "details",
  initialState: {
    value: {
      name: "",
      lastName: "",
      phone: "",
      address: "",
      shirtSize: "",
      pantsSize: "",
      budget: "",
    },
  },
  reducers: {
    updateDetails: (state, action) => {
      console.log("state", state.value);
      console.log("action", action);

      state.value = {
        ...state.value,
        [action.payload.fieldName]: action.payload.value,
      };
    },
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const { updateDetails } = detailsSlice.actions;

export default detailsSlice.reducer;
