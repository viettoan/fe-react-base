import ContentHeader from "../../components/_common/content/contentHeader";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import userApis from "../../api/baseAdmin/user";
import {USER_LEVELS} from "../../helpers/constants";
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
    ]);
    const [parentTitle] = useState('Quản lý users');
    const [title] = useState('Danh sách users');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () => {
        const usersResponse = await userApis.index();
        if (usersResponse.success) {
            setUsers(usersResponse.data);
        }
    }

    const handleDelete = async (userId) => {
        const deleteUser = await userApis.destroy(userId);

        if (deleteUser.success) {
            alert("Success")
            getUsers()
        }
    }

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
                                        {
                                            users.map( (user, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>
                                                            { index + 1 }
                                                        </td>
                                                        <td>
                                                            { user.name }
                                                        </td>
                                                        <td>
                                                            { user.phone }
                                                        </td>
                                                        <td>
                                                            {
                                                                Object.values(USER_LEVELS.levels).find( level => level.value === user.level).label
                                                            }
                                                        </td>
                                                        <td className={'text-center'}>
                                                            <button type="button" className="btn btn-danger me-2" onClick={() => handleDelete(user._id)}>Xóa</button>
                                                            <Link to={ user._id + '/edit' } className="btn btn-success">Chỉnh sửa</Link>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
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