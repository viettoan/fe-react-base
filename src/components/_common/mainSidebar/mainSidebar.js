import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faUsers, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faCircle, faMessage } from "@fortawesome/free-regular-svg-icons";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {useSelector} from "react-redux";
import {userSelector} from "../../../features/auth/authSelectors";

export default function MainSidebar() {
    const user = useSelector(userSelector);
    useEffect(() => {
        document.querySelectorAll('.main-sidebar .nav-sidebar > .nav-item').forEach( (item) => {
            item.querySelector('.nav-link').addEventListener('click', function (e) {
                e.preventDefault();

                if (item.classList.contains('menu-is-opening') && item.classList.contains('menu-open')) {
                    item.classList.remove('menu-is-opening');
                    item.classList.remove('menu-open');
                } else {
                    item.classList.add('menu-is-opening');
                    item.classList.add('menu-open');
                }
            })
        });
    }, [])
    return (
        <>
            <div className="main-sidebar sidebar-dark-primary">
                <a href="http://localhost:3000/" className="brand-link">
                    <img src="/images/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image image-circle elevation-3"/>
                    <span className="brand-text fw-light">Base Admin</span>
                </a>
                <div className="sidebar">
                    <div className="sidebar-content">
                        {/* Sidebar User Panel */}
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="image">
                                <img src={user?.avatarUrl} className="img-circle elevation-2" alt="User" />
                            </div>
                            <div className="info">
                                <NavLink
                                    to={'profile'}
                                    className={"nav-link"}
                                    end
                                >
                                    {user?.name}
                                </NavLink>
                            </div>
                        </div>

                        {/* Sidebar menu */}
                        <nav className="mt-2 sidebar-menu">
                            <ul className={"nav nav-pills nav-sidebar flex-column"} data-widget="treeview" role="menu" data-accordion="false">
                                <li className={"nav-item menu-open menu-is-opening"}>
                                    <a href={"http://localhost:3000/"} className={"nav-link active"}>
                                        <FontAwesomeIcon icon={faUsers} className={"nav-icon"} />
                                        <p>
                                            Quản lý Users
                                            <FontAwesomeIcon icon={faAngleLeft} className={"right"}/>
                                        </p>
                                    </a>
                                    <ul className={"nav nav-treeview"}>
                                        <li className={"nav-item"}>
                                            <NavLink
                                                to={'users'}
                                                className={"nav-link"}
                                                end
                                            >
                                                <FontAwesomeIcon icon={faCircle} className={"nav-icon"} />
                                                <p>
                                                    Danh sách Users
                                                </p>
                                            </NavLink>
                                        </li>
                                        <li className={"nav-item"}>
                                            <NavLink
                                                to={'users/create'}
                                                className={"nav-link"}
                                                end
                                            >
                                                <FontAwesomeIcon icon={faCircle} className={"nav-icon"} />
                                                <p>
                                                    Thêm mới User
                                                </p>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li className={"nav-item menu-open menu-is-opening"}>
                                    <a href={"http://localhost:3000/"} className={"nav-link active"}>
                                        <FontAwesomeIcon icon={faCreditCard} className={"nav-icon"} />
                                        <p>
                                            Payments
                                            <FontAwesomeIcon icon={faAngleLeft} className={"right"}/>
                                        </p>
                                    </a>
                                    <ul className={"nav nav-treeview"}>
                                        <li className={"nav-item"}>
                                            <NavLink
                                                to={'payments'}
                                                className={"nav-link"}
                                                end
                                            >
                                                <FontAwesomeIcon icon={faCircle} className={"nav-icon"} />
                                                <p>
                                                    Tạo payment
                                                </p>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li className={"nav-item menu-open menu-is-opening"}>
                                    <a href={"http://localhost:3000/"} className={"nav-link active"}>
                                        <FontAwesomeIcon icon={faMessage} className={"nav-icon"} />
                                        <p>
                                            Chat
                                            <FontAwesomeIcon icon={faAngleLeft} className={"right"}/>
                                        </p>
                                    </a>
                                    <ul className={"nav nav-treeview"}>
                                        <li className={"nav-item"}>
                                            <NavLink
                                                to={'chat'}
                                                className={"nav-link"}
                                                end
                                            >
                                                <FontAwesomeIcon icon={faCircle} className={"nav-icon"} />
                                                <p>
                                                    Chat box
                                                </p>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}