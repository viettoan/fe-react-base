import userApis from "../../../api/baseAdmin/user";
import moment from "moment";
import {toast} from "react-toastify";

export default function UserExport(data = {})
{
    const handleExport = async () => {
        for (const field in data) {
            if (!data[field]) {ại
                delete data[field];
            }
        }

        const exportUserResponse = await userApis.export(data);

        if (exportUserResponse.success) {
            const file = exportUserResponse.data.data;
            const blob = new Blob([new Uint8Array(file)], {type:"application/octet-stream"});
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.download = moment().format('YYYYMMDD_HHmmss_') + "users.xlsx";
            a.href = url;
            document.body.appendChild(a);
            a.click();
        }

        toast.error(() => <p>Export users thất b</p>);
    };

    return (
        <>
            <button type="button" className="btn btn-info" onClick={handleExport}>
                Export
            </button>
        </>
    )
}