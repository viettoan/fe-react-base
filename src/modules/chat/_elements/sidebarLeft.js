import ListGroup from 'react-bootstrap/ListGroup';
import {useEffect, useRef, useState} from "react";
import userApis from "../../../api/baseAdmin/user";
import {USER, USER_ROOMS} from "../../../constants/app";
import meChatRoomApis from "../../../api/baseAdmin/me/chat/room";
import {useDispatch, useSelector} from "react-redux";
import {updateActiveRoomId} from "../../../redux/features/chatBox/chatBoxSlice";
import {activeRoomIdSelector} from "../../../redux/features/chatBox/chatBoxSelector";
import {userSelector} from "../../../redux/features/auth/authSelectors";
import {toast} from "react-toastify";
import {FaMagnifyingGlass} from "react-icons/fa6"

export default function SidebarLeft() {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  const activeRoomId = useSelector(activeRoomIdSelector);
  const [searchAdminName, setSearchAdminName] = useState('');
  const [admins, setAdmins] = useState([]);
  const [rooms, setRooms] = useState([]);
  const searchBoxListUser = useRef();

  useEffect(() => {
    getRooms();
  }, []);

  const getRooms = async () => {
    const roomsResponse = await meChatRoomApis.index();

    if (roomsResponse.success) {
      setRooms(roomsResponse.data);
    }
  }

  const handleSearchAdmin = async (e) => {
    setSearchAdminName(e.target.value);
    const adminsResponse = await userApis.all({
      name: e.target.value,
      level: USER.levels.admin.value
    })

    if (adminsResponse.success) {
      setAdmins(adminsResponse.data);
      searchBoxListUser.current.classList.remove('d-none');
    }
  }

  const handleActiveRoom = (roomId) => {
    dispatch(updateActiveRoomId(roomId));
  }

  const addRoom = async (memberId) => {
    const users = [
      {
        id: user._id,
        role: USER_ROOMS.role.admin
      },
      {
        id: memberId,
        role: USER_ROOMS.role.member
      }
    ];
    const addRoomResponse = await meChatRoomApis.store({users});

    if (!addRoomResponse.success) {
      toast.error(() => <p>Không thể gửi tin nhắn! Vui lòng thử lại</p>);
    }
    setSearchAdminName('');
    searchBoxListUser.current.classList.add('d-none');
  }
  return (
    <>
      <div className="chat-sidebar-left p-1">
        <div className="d-flex justify-content-between">
          <h3>
            Chat box
          </h3>
        </div>
        <div className="search-box">
          <div className="input-group flex-nowrap">
            <span className="input-group-text">
              <FaMagnifyingGlass />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Tìm kiếm"
              value={searchAdminName}
              onChange={handleSearchAdmin}
            />
          </div>
          <ListGroup className={"search-box__list-user d-none"} ref={searchBoxListUser}>
            {
              admins.map(
                (admin, index) => (
                  <ListGroup.Item
                    key={index}
                    className={"d-flex row m-0"}
                    onClick={() => addRoom(admin._id)}
                  >
                    <div className="image col-2">
                      <img src={admin.avatar} className="img-circle elevation-2" alt="User"/>
                    </div>
                    <div className="col-10 d-flex align-items-center">
                      <span>
                        {admin.name}
                      </span>
                    </div>
                  </ListGroup.Item>
                )
              )
            }
          </ListGroup>
        </div>
        <div className="list-chat col-12 mt-2">
          {
            rooms.map(
              (room, index) => (
                <div
                  className={`list-chat-item d-flex row m-0 my-2 py-2 ${activeRoomId === room._id ? 'active' : ''}`}
                  key={index}
                  onClick={() => handleActiveRoom(room._id)}
                >
                  <div className="image col-3">
                    <img src={room.avatar} className="img-circle elevation-2" alt="User"/>
                  </div>
                  <div className="col-9 info d-flex align-items-center justify-content-between">
                    <span>
                        {room.name}
                    </span>
                    {/*<span className="bg-danger badge">3</span>*/}
                  </div>
                </div>
              )
            )
          }
        </div>
      </div>
    </>
  )
}
