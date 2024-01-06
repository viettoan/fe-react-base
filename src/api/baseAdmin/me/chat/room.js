import baseAdminAxios from "../../../../utils/axios";
import {getHeaderWithAuthorizationBearerToken} from "../../../../utils/helper";
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
