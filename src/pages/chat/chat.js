import SidebarLeft from "../../components/chat/sidebarLeft"

export default function Chat()
{
    return (
        <>
            <div className="col-12 chat">
                <div className="row m-0">
                    <div className="col-3 p-0">
                        <SidebarLeft />
                    </div>
                    <div className="col-6">
                        content
                    </div>
                    <div className="col-3">
                        sidebar right
                    </div>
                </div>
            </div>
        </>
    )
}