import baseAdminAxios from "../../plugins/axios";
const baseRoute = 'users/'
const userApis = {
    index: (params) => {
        return baseAdminAxios.get(baseRoute, {
            params
        });
    },
    destroy: (userId) => {
        return baseAdminAxios.delete(baseRoute + userId);
    },
    store: (data) => {
        return baseAdminAxios.post(baseRoute, data)
    },
    show: (userId) => {
        return baseAdminAxios.get(baseRoute + userId);
    },
    update: (userId, data) => {
        return baseAdminAxios.put(baseRoute + userId, data);
    },
};

export default userApis;