import Navigation from "./components/navigation";
import MainSidebar from "./components/mainSidebar";
import MainFooter from "./components/footer";
import {Outlet, useNavigate} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useEffect} from "react";
import {useCookies} from "react-cookie";
import {useDispatch, useSelector} from "react-redux";
import {createAuthUser, initNotifications, pushNotification} from "../../redux/features/auth/authSlice";
import profileApis from "../../api/baseAdmin/me/profile";
import socket from "../../utils/socketIo";
import AdminCreateNewUser from "../../components/notifications/adminCreateNewUser";

export default function MainLayout() {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [cookies] = useCookies(['user_token']);
  let navigate = useNavigate();

  useEffect(() => {
    const mainSocket = socket('admin');
    mainSocket.on('admin_create_new_user', (data) => {
      toast.info(() => <AdminCreateNewUser data={data}/>);
      dispatch(pushNotification(data));
    })
    mainSocket.on("connect_error", (err) => {
      console.log('socket not connected', err.message);
    });

    if (!cookies.user_token) {
      navigate('/login');
    }
    if (!auth.user) {
      (
        async () => {
          const profileResponse = await profileApis.show();

          if (profileResponse.success) {
            dispatch(createAuthUser(profileResponse.data))
          }
        }
      )()
    }
    profileApis.notifications()
      .then(
        (response) => dispatch(initNotifications(response.data))
      )
      .catch(
        e => toast.error(() => e.message)
      )
  }, [cookies]);

  return (
    <>
      <div id="main" className="sidebar-mini layout-fixed">
        <div className="wrapper container-fluid p-0">
          <Navigation/>
          <MainSidebar/>
          <div className="content-wrapper">
            <Outlet/>
          </div>
          <MainFooter/>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            style={{width: "400px"}}
          />
        </div>
      </div>
    </>
  );
}
