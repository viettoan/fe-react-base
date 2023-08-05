import {createSelector} from "@reduxjs/toolkit";

export const userSelector = state => state.auth.user;
export const notificationsSelector = state => state.auth.notifications;