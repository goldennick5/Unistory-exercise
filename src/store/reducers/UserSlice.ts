import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  id: number;
  username: string;
  email: string;
  address: string;
  disable: boolean;
};

const initialState: UserState = {
  id: 0,
  username: '',
  email: '',
  address: '',
  disable: true,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    //getting user's username
    getUsername(state, action) {
      state.username = action.payload;
    },
    //getting user's email
    getEmail(state, action) {
      state.email = action.payload;
    },
    //getting user's address
    getAddress(state, action) {
      state.address = action.payload;
    },
    disableButton(state, action) {
      state.disable = action.payload;
    }
  },
});

export const { getUsername, getEmail, getAddress, disableButton } = userSlice.actions;
export default userSlice.reducer;