import { createSlice } from "@reduxjs/toolkit";

const URCOLOR = createSlice({
  name: "URCOLOR",
  initialState: {
    color: "",
  },
  reducers: {
    selectColor: (state, action) => {

    }
  }
});

export const { selectColor } = URCOLOR.actions;
export default URCOLOR.reducer;