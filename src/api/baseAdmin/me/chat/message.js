import baseAdminAxios from "../../../../plugins/axios";
import {getHeaderWithAuthorizationBearerToken} from "../../../../helpers/common";
const baseRoute = 'me/chat/messages';
const meChatMessageApis = {
  store: (data) => {
    return baseAdminAxios.post(baseRoute, data, {
      headers: getHeaderWithAuthorizationBearerToken()
    })
  },
}

export default meChatMessageApis;