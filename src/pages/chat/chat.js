import SidebarLeft from "./_elements/sidebarLeft"
import SidebarRight from "./_elements/sidebarRight";
import Content from "./_elements/content";
import {useDispatch, useSelector} from "react-redux";
import {activeRoomIdSelector} from "../../features/chatBox/chatBoxSelector";
import {useEffect} from "react";
import meChatRoomApis from "../../api/baseAdmin/me/chat/room";
import {initMessages} from "../../features/chatBox/chatBoxSlice";

export default function Chat() {
  const activeRoomId = useSelector(activeRoomIdSelector);
  const dispacth = useDispatch();
  useEffect(() => {
    getDetailActiveRoom(activeRoomId)
  }, [activeRoomId]);

  const getDetailActiveRoom = async (activeRoomId) => {
    if (!activeRoomId) {
      return;
    }
    const activeRoom = await meChatRoomApis.show(activeRoomId);

    if (activeRoom.success) {
      dispacth(initMessages(activeRoom.data.messages));
    }
  }

  return (
    <>
      <div className="col-12 chat">
        <div className="row m-0">
          <div className="col-3 p-0">
            <SidebarLeft/>
          </div>
          <div className="col-6 p-0">
            <Content/>
          </div>
          <div className="col-3 p-0">
            <SidebarRight/>
          </div>
        </div>
      </div>
    </>
  )
}