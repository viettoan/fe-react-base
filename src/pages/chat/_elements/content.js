import {memo, useEffect, useRef} from "react";
import {userSelector} from "../../../features/auth/authSelectors";
import {useDispatch, useSelector} from "react-redux";
import {IoIosSend} from "react-icons/io";
import {MESSAGES} from "../../../helpers/constants";
import {toast} from "react-toastify";
import socket from "../../../plugins/socketIo";
import {activeRoomIdSelector, messagesSelector} from "../../../features/chatBox/chatBoxSelector";
import {addNewMessage} from "../../../features/chatBox/chatBoxSlice";
import {FaFile, FaVideo, FaPhone} from "react-icons/fa6"

const mainSocket = socket('admin');

function Content() {
  const user = useSelector(userSelector);
  const roomId = useSelector(activeRoomIdSelector);
  const messages = useSelector(messagesSelector);
  const inputText = useRef('');
  const dispatch = useDispatch();
  useEffect(() => {
    if (roomId) {
      mainSocket.emit('join_room', {
        room_id: roomId
      })
      mainSocket.on('new_message', data => {
        if (data.status_code === 200) {
          dispatch(addNewMessage(data.data));
        }
      })

      mainSocket.on('send_message_error', data => {
        toast.error(() => <p>Không thể gửi tin nhắn! Vui lòng thử lại</p>);
      })
    }
  }, [roomId]);
  const sendMessage = async () => {
    if (!inputText.current.value) {
      return;
    }

    mainSocket.emit('send_message', {
      sender_id: user._id,
      room_id: roomId,
      content: inputText.current.value,
      type: MESSAGES.type.text
    })
    inputText.current.value = '';
  }

  return (
    <>
      <div className="chat-content">
        <div className={'messages p-3'}>
          {
            messages.map(
              message => (
                <div
                  key={message._id}
                  className={`d-flex my-2 ${message.sender_id === user._id ? 'justify-content-end current-user' : 'justify-content-start other-user' }`}
                >
                  <span className={'p-2 message'}>
                      { message.content }
                  </span>
                </div>
              )
            )
          }
        </div>
        <form className={'d-flex align-items-end p-2'}>
          <div className={'col-10'}>
            <input
              className="form-control"
              type="text"
              placeholder="Gửi tin nhắn"
              ref={inputText}
              disabled={!roomId}
            />
          </div>
          <div className={'col-2 d-flex align-items-center justify-content-around form-action px-2'}>
            <IoIosSend className={'fa-2xl'} onClick={sendMessage}/>
            <FaFile className={'fa-xl'}/>
            <FaVideo className={'fa-xl'}/>
            <FaPhone className={'fa-xl'}/>
          </div>
        </form>
      </div>

    </>
  )
}

export default memo(Content);
