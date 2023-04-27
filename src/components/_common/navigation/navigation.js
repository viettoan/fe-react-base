import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch, faExpandArrowsAlt, faThLarge } from "@fortawesome/free-solid-svg-icons";
import { faComments, faBell } from "@fortawesome/free-regular-svg-icons";
import { collapseMainSidebar } from "../../../actions/navigation";
import { useDispatch, useSelector } from "react-redux";

const Navigation = () => {
    const navigation = useSelector(state => state.navigation);
    const dispatch = useDispatch();
    const collapseSidebar = (e) => {
        e.preventDefault();
        const isCollapse = navigation.isCollapseMainSideBar;
        dispatch(collapseMainSidebar(!isCollapse))

        if (!isCollapse) {
            document.getElementById('main').classList.add('sidebar-collapse');

            return;
        }

        document.getElementById('main').classList.remove('sidebar-collapse');
    }

    return (
        <>
            <nav className="main-header navbar navbar-expand-lg navbar-light bg-white">
                <div className="container-fluid p-0">
                    <ul className="navbar-nav mb-2 mb-lg-0 mx-3">
                        <li className="nav-item">
                            <a href="http://localhost:3000/" className="nav-link" onClick={collapseSidebar}><FontAwesomeIcon icon={faBars} /></a>
                        </li>
                    </ul>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="src/components/_common#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="src/components/_common#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="src/components/_common#"><FontAwesomeIcon icon={faSearch} /></a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="src/components/_common#"><FontAwesomeIcon icon={faComments} /></a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="src/components/_common#"><FontAwesomeIcon icon={faBell} /></a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="src/components/_common#"><FontAwesomeIcon icon={faExpandArrowsAlt} /></a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="src/components/_common#"><FontAwesomeIcon icon={faThLarge} /></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
export default Navigation;