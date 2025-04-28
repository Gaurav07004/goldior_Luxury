import { createSlice } from "@reduxjs/toolkit";

// Initial state for the user
const initialState = {
  id: null,
  username: "",
  gender: "",
  email: "",
  lastLoggedInAt: null,
  isAdmin: false,
  addresses: [],
  favourites: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      // Update the user data in Redux state
      const { user } = action.payload;
      state.id = user.id;
      state.username = user.username;
      state.gender = user.gender;
      state.email = user.email;
      state.lastLoggedInAt = user.lastLoggedInAt;
      state.isAdmin = user.isAdmin;
      state.addresses = user.addresses;
      state.favourites = user.favourites;
    },
    clearUserData: (state) => {
      // Clear user data when the user logs out
      state.id = null;
      state.username = "";
      state.gender = "";
      state.email = "";
      state.lastLoggedInAt = null;
      state.isAdmin = false;
      state.addresses = [];
      state.favourites = [];
    },
  },
});

// Export actions
export const { setUserData, clearUserData } = userSlice.actions;

// Export reducer
export default userSlice.reducer;
