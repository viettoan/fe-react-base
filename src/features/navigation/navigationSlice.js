import {createSlice} from "@reduxjs/toolkit";

const navigationSlice = createSlice({
    name: 'navigation',
    initialState: {
        isCollapseMainSideBar: false,
    },
    reducers: {
        collapseMainSidebar: (state, action) => {
            state.isCollapseMainSideBar = action.payload;
        }
    }
})

export const { collapseMainSidebar } = navigationSlice.actions;
export default navigationSlice.reducer;