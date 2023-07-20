import {faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
export default function SidebarRight()
{
    return (
        <>
            <div className="chat-sidebar-right p-1 pt-5 ">
                <div className="image d-flex justify-content-center">
                    <img src={"/images/avatar.png"} className="img-circle elevation-2" alt="User" />
                </div>
                <h3 className={'text-center mt-2'}>
                    Admin 1
                </h3>
                <div className={'d-flex justify-content-around'}>
                    <div >
                        <div className={'d-flex justify-content-center'}>
                            <a className={'btn-circle d-flex justify-content-center align-items-center'}>
                                <FontAwesomeIcon icon={faUser}/>
                            </a>
                        </div>

                        <span>Trang cá nhân</span>
                    </div>

                </div>
            </div>
        </>
    )
}