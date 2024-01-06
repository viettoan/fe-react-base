import baseAdminAxios from "../../../utils/axios";
import {getHeaderWithAuthorizationBearerToken} from "../../../utils/helper";

const baseRoute = 'profile/'

const profileApis = {
  show: () => {
    return baseAdminAxios.get(baseRoute, {
      headers: getHeaderWithAuthorizationBearerToken()
    });
  },
  update: (data) => {
    return baseAdminAxios.post(baseRoute, data, {
      headers: getHeaderWithAuthorizationBearerToken()
    });
  },
  notifications: () => {
    return baseAdminAxios.get(baseRoute + 'notifications', {
      headers: getHeaderWithAuthorizationBearerToken()
    });
  }
};

export default profileApis;
