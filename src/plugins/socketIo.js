import {io} from "socket.io-client";
import {Cookies} from "react-cookie";

const socket = (namespace) => {
  if (!namespace) {
    return io(process.env.REACT_APP_SOCKET_IO_SERVER);
  }
  const cookies = new Cookies();
  const userToken = cookies.get('user_token') ?? '';

  return io(
    process.env.REACT_APP_SOCKET_IO_SERVER + '/' + namespace,
    {
      auth: cb => {
        cb({
          token: `Bearer ${userToken}`
        })
      }
    }
  )
};

export default socket;