import baseAdminAxios from "../../plugins/axios";
import {getHeaderWithAuthorizationBearerToken} from "../../helpers/common";
const baseRoute = 'users/'

const userApis = {
    index: (params) => {

        return baseAdminAxios.get(baseRoute, {
            params,
            headers: getHeaderWithAuthorizationBearerToken()
        });
    },
    destroy: (userId) => {
        return baseAdminAxios.delete(baseRoute + userId, {
            headers: getHeaderWithAuthorizationBearerToken()
        });
    },
    store: (data) => {
        return baseAdminAxios.post(baseRoute, data,{
            headers: getHeaderWithAuthorizationBearerToken()
        })
    },
    show: (userId) => {
        return baseAdminAxios.get(baseRoute + userId, {
            headers: getHeaderWithAuthorizationBearerToken()
        });
    },
    update: (userId, data) => {
        return baseAdminAxios.put(baseRoute + userId, data, {
            headers: getHeaderWithAuthorizationBearerToken()
        });
    },
    export: (data) => {
        return baseAdminAxios.post(baseRoute + 'export', data,{
            headers: getHeaderWithAuthorizationBearerToken()
        })
    },
};

export default userApis;