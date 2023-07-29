import { createSlice } from "@reduxjs/toolkit";
import {generateFileToUrl} from "../../helpers/common";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        notifications: []
    },
    reducers: {
        createAuthUser: (state, action) => {
            const user = action.payload;
            let avatar = user.avatar;

            try {
                avatar = JSON.parse(user.avatar)

                if (typeof avatar === 'object') {
                    avatar = generateFileToUrl(avatar.value.data)
                }
            } catch (e) {
                avatar = user.avatar;
            }
            user.avatarUrl = avatar;
            state.user = user;
        },
        updateAuthUser: (state, action) => {
            const user = action.payload;
            let avatar = user.avatar;

            try {
                avatar = JSON.parse(user.avatar)

                if (typeof avatar === 'object') {
                    avatar = generateFileToUrl(avatar.value.data)
                }
            } catch (e) {
                avatar = user.avatar;
            }

            user.avatarUrl = avatar;
            state.user = user;
        },
        initNotifications: (state, action) => {
            state.notifications = action.payload ?? [];
        },
        pushNotification: (state, action) => {
            state.notifications.unshift(action.payload)
        }
    }
});

export const { createAuthUser, updateAuthUser, initNotifications, pushNotification } = authSlice.actions;
export default authSlice.reducer;