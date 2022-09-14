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
      neverWear: [],
      alwaysWear: [],
    },
  },
  reducers: {
    updateDetails: (state, action) => {
      state.value = {
        ...state.value,
        [action.payload.fieldName]: action.payload.value,
      };
    },
    updateNeverWear: (state, action) => {
      let value = action.payload.value;
      state.value.neverWear = [...state.value.neverWear, value];
    },
    updateAlwaysWear: (state, action) => {
      let value = action.payload.value;
      state.value.alwaysWear = [...state.value.alwaysWear, value];
    },
    updateNeverWearDelete: (state, action) => {
      let value = action.payload.value;
      let newStateNeverWear = [...state.value.neverWear];

      for (let i = 0; i < newStateNeverWear.length; i++) {
        if (newStateNeverWear[i] === value) {
          newStateNeverWear.splice(i, 1);
          state.value.neverWear = [...newStateNeverWear];
        }
      }
    },
    updateAlwaysWearDelete: (state, action) => {
      let value = action.payload.value;
      let newStateAlwaysWear = [...state.value.alwaysWear];

      for (let i = 0; i < newStateAlwaysWear.length; i++) {
        if (newStateAlwaysWear[i] === value) {
          newStateAlwaysWear.splice(i, 1);
          state.value.alwaysWear = [...newStateAlwaysWear];
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const {
  updateDetails,
  updateNeverWear,
  updateNeverWearDelete,
  updateAlwaysWear,
  updateAlwaysWearDelete,
} = detailsSlice.actions;

export default detailsSlice.reducer;
