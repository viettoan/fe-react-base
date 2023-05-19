import { AUTH } from "../actions/types";
import {generateFileToUrl} from "../helpers/common";
const internalState = {
    user: null,
}

export default function authReducers (state = internalState, action) {
    switch (action.type) {
        case AUTH.createAuthUser:
        case AUTH.updateAuthUser:
            const user = action.payload.user;

            return Object.assign({}, state, {
                user: {...user, avatarUrl: generateFileToUrl(JSON.parse(user.avatar).value.data)},
            });
        default:
            return state;
    }
}