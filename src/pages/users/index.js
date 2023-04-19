import ContentHeader from "../../components/_common/content/contentHeader";
import {useState} from "react";
import {Link} from "react-router-dom";
export default function UserIndex() {
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
    const [title] = useState('Danh sách users')

    return (
        <>
            <ContentHeader breadcrumb={breadcrumb} title={parentTitle}/>
            <section className={'content'}>
                <div className={'container-fluid'}>
                    <div className={'row'}>
                        <div className={'col-12'}>
                            <div className="card mb-3">
                                <div className="card-header">
                                    <h3 className="card-title">{ title }</h3>
                                </div>
                                <div className={'card-body'}>
                                    <table className="table table-bordered">
                                        <thead>
                                        <tr className={'text-center'}>
                                            <th style={{width:10}}>#</th>
                                            <th>Họ tên</th>
                                            <th>Số điện thoại</th>
                                            <th>Phân quyền</th>
                                            <th style={{width:`15%`}}>Label</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Admin</td>
                                                <td>
                                                    0981934614
                                                </td>
                                                <td>
                                                    Admin
                                                </td>
                                                <td className={'text-center'}>
                                                    <button type="button" className="btn btn-danger me-2">Xóa</button>
                                                    <Link to={'1/edit'} className="btn btn-success">Chỉnh sửa</Link>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}