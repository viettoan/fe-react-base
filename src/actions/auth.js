import { AUTH } from "./types";

export const createAuthUser = (user) => ({
    type: AUTH.createAuthUser,
    payload: {
        user
    }
});

export const updateAuthUser = (user) => ({
    type: AUTH.updateAuthUser,
    payload: {
        user
    }
});