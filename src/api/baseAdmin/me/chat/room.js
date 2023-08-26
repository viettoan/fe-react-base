import baseAdminAxios from "../../../../plugins/axios";
import {getHeaderWithAuthorizationBearerToken} from "../../../../helpers/common";
const baseRoute = 'me/chat/rooms';
const meChatRoomApis = {
  index: () => {
    return baseAdminAxios.get(baseRoute, {
      headers: getHeaderWithAuthorizationBearerToken()
    });
  },
  show: (roomId) => {
    return baseAdminAxios.get(baseRoute + '/' + roomId, {
      headers: getHeaderWithAuthorizationBearerToken()
    });
  },
  store: (data) => {
    return baseAdminAxios.post(baseRoute, data, {
      headers: getHeaderWithAuthorizationBearerToken()
    })
  },
}

export default meChatRoomApis;