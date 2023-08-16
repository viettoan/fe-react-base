import baseAdminAxios from "../../../../plugins/axios";
import {getHeaderWithAuthorizationBearerToken} from "../../../../helpers/common";
const baseRoute = 'me/chat/rooms';
const meChatRoomApis = {
  index: () => {
    return baseAdminAxios.get(baseRoute, {
      headers: getHeaderWithAuthorizationBearerToken()
    });
  }
}

export default meChatRoomApis;