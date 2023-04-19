export default function UserFormElement({isUpdate = false})
{
    return (
        <>
            <form>
                <div className={'p-3 col-6'}>
                    <div className="mb-3">
                        <label htmlFor="inputName" className="form-label">Họ tên</label>
                        <input type="text" className="form-control" id="inputName" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPhone" className="form-label">Số điện thoại</label>
                        <input type="text" className="form-control" id="inputPhone" />
                    </div>
                    <div className={'mb-3'}>
                        <div>
                            <label className="form-label">Phân quyền</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" id="inputLevelAdmin" />
                            <label className="form-check-label" htmlFor="inputLevelAdmin">
                                Admin
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" id="inputLevelUser" />
                            <label className="form-check-label" htmlFor="inputLevelUser">
                                User
                            </label>
                        </div>
                    </div>

                </div>
                <div className="card-footer">
                    {
                        (() => {
                            if (isUpdate){
                                return (
                                    <button className={'btn btn-success'}>Cập nhật</button>
                                )
                            }

                            return <button className={'btn btn-primary'}>Thêm mới</button>;
                        })()
                    }
                </div>
            </form>
        </>
    )
}