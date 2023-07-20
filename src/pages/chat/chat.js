import SidebarLeft from "../../components/chat/sidebarLeft"
import SidebarRight from "../../components/chat/sidebarRight";
import Content from "../../components/chat/content";
export default function Chat()
{
    return (
        <>
            <div className="col-12 chat">
                <div className="row m-0">
                    <div className="col-3 p-0">
                        <SidebarLeft />
                    </div>
                    <div className="col-6 p-0">
                        <Content />
                    </div>
                    <div className="col-3 p-0">
                        <SidebarRight />
                    </div>
                </div>
            </div>
        </>
    )
}