export default function Login() {
    return (
        <>
            <div className={'container-fluid row bg-black login-page justify-content-center align-items-center'}>
                <div className="card login-content p-0 bg-light">
                    <div className="card-body">
                        <div className={'text-center'}>
                            <img src="/images/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image image-circle elevation-3"/>
                        </div>
                        <form className={"pb-3"}>
                            <div className="mb-3">
                                <label htmlFor="inputPhone" className="form-label">Số điện thoại</label>
                                <input type="text" className="form-control" id="inputPhone" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputPassword" className="form-label">Mật khẩu</label>
                                <input type="password" className="form-control" id="inputPassword"/>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="rememberMe"/>
                                <label className="form-check-label" htmlFor="rememberMe">Nhớ mật khẩu</label>
                            </div>
                            <div className={'text-center'}>
                                <button type="submit" className="btn btn-primary">Đăng nhập</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}