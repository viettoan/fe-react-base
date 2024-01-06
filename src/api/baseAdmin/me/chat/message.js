import baseAdminAxios from "../../../../utils/axios";
import {getHeaderWithAuthorizationBearerToken} from "../../../../utils/helper";
const baseRoute = 'me/chat/messages';
const meChatMessageApis = {
  store: (data) => {
    return baseAdminAxios.post(baseRoute, data, {
      headers: getHeaderWithAuthorizationBearerToken()
    })
  },
}

export default meChatMessageApis;
