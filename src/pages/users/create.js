import ContentHeader from "../../components/_common/content/contentHeader";
import { useState } from "react";

export default function UserCreate() {
    const [breadcrumb] = useState([
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'Quản lý users',
            link: 'users'
        },
    ])
    const [parentTitle] = useState('Quản lý users')
    const [title] = useState('Thêm mới user')

    return (
        <>
            <ContentHeader breadcrumb={breadcrumb} title={parentTitle}/>
            <section className={'content'}>
                <div className={'container-fluid'}>
                    <div className={'row'}>
                        <div className={'col-12'}>
                            <div className="card mb-3">
                                <div className="card-header text-white bg-primary">
                                    <h3 className="card-title">{ title }</h3>
                                </div>
                                <form>
                                    <div className={'p-3 col-6'}>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            <div id="emailHelp" className="form-text">We'll never share your email with
                                                anyone else.
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                            <input type="password" className="form-control" id="exampleInputPassword1" />
                                        </div>
                                        <div className="mb-3 form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <button type="submit" className="btn btn-primary">Thêm mới</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}