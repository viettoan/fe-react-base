import {faFile} from "@fortawesome/free-regular-svg-icons";
import {faVideo, faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Content() {
  return (
    <>
      <div className="chat-content">
        <div className={'messages p-3'}>
          <div className={'current-user d-flex justify-content-end my-2'}>
                        <span className={'p-2 message'}>
                            message 1
                        </span>
          </div>
          <div className={'other-user d-flex justify-content-start my-2'}>
                        <span className={'p-2 message'}>
                            message 2
                        </span>
          </div>
          <div className={'current-user d-flex justify-content-end my-2'}>
                        <span className={'p-2 message'}>
                            message 1
                        </span>
          </div>

          <div className={'other-user d-flex justify-content-start my-2'}>
                        <span className={'p-2 message'}>
                            message 2
                        </span>
          </div>
          <div className={'current-user d-flex justify-content-end my-2'}>
                        <span className={'p-2 message'}>
                            message 1
                        </span>
          </div>

          <div className={'other-user d-flex justify-content-start my-2'}>
                        <span className={'p-2 message'}>
                            message 2
                        </span>
          </div>
          <div className={'current-user d-flex justify-content-end my-2'}>
                        <span className={'p-2 message'}>
                            message 1
                        </span>
          </div>
          <div className={'other-user d-flex justify-content-start my-2'}>
                        <span className={'p-2 message'}>
                            message 2
                        </span>
          </div>
          <div className={'current-user d-flex justify-content-end my-2'}>
                        <span className={'p-2 message'}>
                            message 1
                        </span>
          </div>
          <div className={'other-user d-flex justify-content-start my-2'}>
                        <span className={'p-2 message'}>
                            message 2
                        </span>
          </div>
          <div className={'current-user d-flex justify-content-end my-2'}>
                        <span className={'p-2 message'}>
                            message 1
                        </span>
          </div>

          <div className={'other-user d-flex justify-content-start my-2'}>
                        <span className={'p-2 message'}>
                            message 2
                        </span>
          </div>
          <div className={'current-user d-flex justify-content-end my-2'}>
                        <span className={'p-2 message'}>
                            message 1
                        </span>
          </div>

          <div className={'other-user d-flex justify-content-start my-2'}>
                        <span className={'p-2 message'}>
                            message 2
                        </span>
          </div>
          <div className={'current-user d-flex justify-content-end my-2'}>
                        <span className={'p-2 message'}>
                            message 1
                        </span>
          </div>
          <div className={'other-user d-flex justify-content-start my-2'}>
                        <span className={'p-2 message'}>
                            message 2
                        </span>
          </div>
        </div>
        <form className={'d-flex align-items-end p-2'}>
          <div className={'col-10'}>
            <input
              className="form-control"
              type="text"
              placeholder="Gửi tin nhắn"
            />
          </div>
          <div className={'col-2 d-flex align-items-center justify-content-around form-action px-2'}>
            <FontAwesomeIcon icon={faFile} className={'fa-xl'}/>
            <FontAwesomeIcon icon={faVideo} className={'fa-xl'}/>
            <FontAwesomeIcon icon={faPhone} className={'fa-xl'}/>
          </div>
        </form>
      </div>

    </>
  )
}