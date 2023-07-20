import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function SidebarLeft()
{
    return (
        <>
            <div className="chat-sidebar-left p-1">
                <div className="d-flex justify-content-between">
                    <h3>
                        Chat box
                    </h3>
                </div>
                <div className="chat-sidebar-left-search">
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </span>
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="Tìm kiếm"
                        />
                    </div>
                </div>
                <div className="list-chat col-12 mt-2">
                    <div className="list-chat-item d-flex row m-0 my-2 py-2">
                        <div className="image col-3">
                            <img src={"/images/avatar.png"} className="img-circle elevation-2" alt="User" />
                        </div>
                        <div className="col-9 info d-flex align-items-center justify-content-between">
                            <span>
                                Admin 1
                            </span>
                            <span className="bg-danger badge">3</span>
                        </div>
                    </div>
                    <div className="list-chat-item d-flex row m-0 my-2 py-2">
                        <div className="image col-3">
                            <img src={"/images/avatar.png"} className="img-circle elevation-2" alt="User" />
                        </div>
                        <div className="col-9 info d-flex align-items-center justify-content-between">
                            <span>
                                Admin 1
                            </span>
                            <span className="bg-danger badge">3</span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}