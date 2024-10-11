import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: ''
}

const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    new_text: (state, action) => {
      state.text = action.payload
    }
  }
});

export const textReducer = textSlice.reducer;
export const textActions = textSlice.actions;