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

            return Object.assign({}, state, {
                user: {...user, avatarUrl: avatar},
            });
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

            return Object.assign({}, state, {
                user: {...user, avatarUrl: avatar},
            });
        },
        initNotifications: (state, action) => {
            const notifications = action.payload ?? [];

            return {
                ...state,
                notifications
            }
        },
        pushNotification: (state, action) => {
            const notification = action.payload;
            const notifications = [notification, ...state.notifications];

            return {
                ...state,
                notifications
            }
        }
    }
});

export const { createAuthUser, updateAuthUser, initNotifications, pushNotification } = authSlice.actions;
export default authSlice.reducer;