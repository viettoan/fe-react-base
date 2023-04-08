import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
export default function MainSidebar() {
    return (
        <>
            <div className="main-sidebar sidebar-dark-primary">
                <a href="http://localhost:3000/" className="brand-link">
                    <img src="/images/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image image-circle elevation-3"/>
                    <span className="brand-text fw-light">AdminLTE 3</span>
                </a>
                <div className="sidebar">
                    <div className="sidebar-content">
                        {/* Sidebar User Panel */}
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="image">
                                <img src="/images/user2-160x160.jpg" className="img-circle elevation-2" alt="User" />
                            </div>
                            <div className="info">
                                <a href="http://localhost:3000/" className="d-block">Alexander Pierce</a>
                            </div>
                        </div>

                        {/* Sidebar menu */}
                        <nav className="mt-2">
                            <ul className={"nav nav-pills nav-sidebar flex-column"} data-widget="treeview" role="menu" data-accordion="false">
                                <li className={"nav-item menu-open"}>
                                    <a href={"http://localhost:3000/"} className={"nav-link active"}>
                                        <FontAwesomeIcon icon={faTachometerAlt} className={"nav-icon"} />
                                        <p>
                                            Dashboard
                                            <FontAwesomeIcon icon={faAngleLeft} className={"right"}/>
                                        </p>
                                    </a>
                                    <ul className={"nav nav-treeview"}>
                                        <li className={"nav-item"}>
                                            <a href={"http://localhost:3000/"} className={"nav-link active"}>
                                                <FontAwesomeIcon icon={faCircle} className={"nav-icon"} />
                                                <p>
                                                    Dashboard v1
                                                </p>
                                            </a>
                                        </li>
                                        <li className={"nav-item"}>
                                            <a href={"http://localhost:3000/"} className={"nav-link"}>
                                                <FontAwesomeIcon icon={faCircle} className={"nav-icon"} />
                                                <p>
                                                    Dashboard v2
                                                </p>
                                            </a>
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