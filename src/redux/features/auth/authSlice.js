import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    notifications: []
  },
  reducers: {
    createAuthUser: (state, action) => {
      state.user = action.payload;
    },
    updateAuthUser: (state, action) => {
      state.user = action.payload;
    },
    initNotifications: (state, action) => {
      state.notifications = action.payload ?? [];
    },
    pushNotification: (state, action) => {
      state.notifications.unshift(action.payload)
    }
  }
});

export const {createAuthUser, updateAuthUser, initNotifications, pushNotification} = authSlice.actions;
export default authSlice.reducer;