import { COLLAPSE_MAIN_SIDEBAR } from "../actions/types";
const internalState = {
    isCollapseMainSideBar: false,
}
export default function navigationReducers (state = internalState, action) {
    switch (action.type) {
        case COLLAPSE_MAIN_SIDEBAR:
            return Object.assign({}, state, {
                isCollapseMainSideBar: action.payload.isCollapse,
            });
        default:
            return state;
    }
}