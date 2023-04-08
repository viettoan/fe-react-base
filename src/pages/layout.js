import Navigation from "../components/_common/navigation/navigation";
import MainSidebar from "../components/_common/mainSidebar/mainSidebar";
import MainFooter from "../components/_common/footer/footer";

export default function Layout() {
    return (
        <>
            <div id="main" className="sidebar-mini layout-fixed">
                <div className="wrapper container-fluid p-0">
                    <Navigation />
                    <MainSidebar />
                    {/* Content Wrapper */}
                    <div className="content-wrapper">
                    </div>
                    <MainFooter />
                </div>
            </div>
        </>
    );
}