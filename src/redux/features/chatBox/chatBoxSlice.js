import {createSlice} from "@reduxjs/toolkit";

const chatBoxSlice = createSlice({
  name: 'chatBox',
  initialState: {
    activeRoomId: null,
    messages: [],
  },
  reducers: {
    updateActiveRoomId: (state, action) => {
      state.activeRoomId = action.payload;
    },
    initMessages: (state, action) => {
      state.messages = action.payload;
    },
    addNewMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  }
})

export const {
  updateActiveRoomId,
  initMessages,
  addNewMessage
} = chatBoxSlice.actions;
export default chatBoxSlice.reducer;