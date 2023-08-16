import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import ListGroup from 'react-bootstrap/ListGroup';
import {useEffect, useRef, useState} from "react";
import userApis from "../../../api/baseAdmin/user";
import {USER} from "../../../helpers/constants";
import meChatRoomApis from "../../../api/baseAdmin/me/chat/room";

export default function SidebarLeft() {
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
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
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
                  <ListGroup.Item key={index} className={"d-flex row m-0"}>
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
                <div className="list-chat-item d-flex row m-0 my-2 py-2" key={index}>
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