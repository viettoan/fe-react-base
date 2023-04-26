import {useEffect, useState} from "react";
import {USER_LEVELS} from "../../../helpers/constants";
import userApis from "../../../api/baseAdmin/user";
import {useParams} from "react-router-dom";

export default function UserFormElement({isUpdate = false})
{
    const [user, setUser] = useState({
        name: '',
        phone: '',
        level: USER_LEVELS.levels.admin.value
    })
    let urlParams = useParams()

    useEffect(() => {
        if (isUpdate) {
            (
                async () => {
                    const userResponse = await userApis.show(urlParams.userId);

                    if (userResponse.success) {
                        setUser(userResponse.data[0]);
                    }
                }
            )()
        }
    }, [isUpdate, urlParams])

    const store = async (e) => {
        e.preventDefault();
        const userResponse = await userApis.store(user);

        if (userResponse.success) {
            alert('Store user success');
        }
    }

    const update = async (e) => {
        e.preventDefault();

        const userResponse = await userApis.update(urlParams.userId, user);

        if (userResponse.success) {
            alert('Update user success');
        }
    }

    return (
        <>
            <form>
                <div className={'p-3 col-6'}>
                    <div className="mb-3">
                        <label htmlFor="inputName" className="form-label">Họ tên</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputName"
                            value={user.name}
                            onChange={e => setUser({...user, name: e.target.value})}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPhone" className="form-label">Số điện thoại</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputPhone"
                            value={user.phone}
                            onChange={e => setUser({...user, phone: e.target.value})}
                        />
                    </div>
                    <div className={'mb-3'}>
                        <div>
                            <label className="form-label">Phân quyền</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                id="inputLevelAdmin"
                                checked={ user.level === USER_LEVELS.levels.admin.value }
                                onChange={e => setUser({...user, level: USER_LEVELS.levels.admin.value})}
                            />
                            <label className="form-check-label" htmlFor="inputLevelAdmin">
                                { USER_LEVELS.levels.admin.label }
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                id="inputLevelUser"
                                checked={ user.level === USER_LEVELS.levels.user.value }
                                onChange={e => setUser({...user, level: USER_LEVELS.levels.user.value})}
                            />
                            <label className="form-check-label" htmlFor="inputLevelUser">
                                { USER_LEVELS.levels.user.label }
                            </label>
                        </div>
                    </div>

                </div>
                <div className="card-footer">
                    {
                        (() => {
                            if (isUpdate){
                                return (
                                    <button
                                        className={'btn btn-success'}
                                        onClick={e => update(e)}
                                    >Cập nhật</button>
                                );
                            }

                            return (
                                <button
                                    className={'btn btn-primary'}
                                    onClick={(e) => store(e)}
                                >
                                    Thêm mới
                                </button>
                            );
                        })()
                    }
                </div>
            </form>
        </>
    )
}