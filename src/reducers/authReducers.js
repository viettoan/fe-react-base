import { AUTH } from "../actions/types";
const internalState = {
    user: null,
}

export default function authReducers (state = internalState, action) {
    switch (action.type) {
        case AUTH.createAuthUser:
        case AUTH.updateAuthUser:
            const user = action.payload.user;
            const avatar = JSON.parse(user.avatar);
            const blob = new Blob([new Uint8Array(avatar.value.data)]);
            const url = URL.createObjectURL(blob);

            return Object.assign({}, state, {
                user: {...user, avatarUrl: url},
            });
        default:
            return state;
    }
}