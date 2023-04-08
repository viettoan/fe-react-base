import { COLLAPSE_MAIN_SIDEBAR } from "./types";
export const collapseMainSidebar = (isCollapse) => ({
    type: COLLAPSE_MAIN_SIDEBAR,
    payload: {
        isCollapse
    }
});