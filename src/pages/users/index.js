import ContentHeader from "../../components/_common/content/contentHeader";
import {useState} from "react";
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
                                <div className="card-header text-white bg-primary">
                                    <h3 className="card-title">{ title }</h3>
                                </div>
                                <div className={'card-body'}>
                                    <table className="table table-bordered">
                                        <thead>
                                        <tr>
                                            <th style={{width:10}}>#</th>
                                            <th>Task</th>
                                            <th>Progress</th>
                                            <th style={{width:40}}>Label</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>1.</td>
                                            <td>Update software</td>
                                            <td>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar progress-bar-danger" style={{width:`50%`}}></div>
                                                </div>
                                            </td>
                                            <td><span className="badge bg-danger">55%</span></td>
                                        </tr>
                                        <tr>
                                            <td>2.</td>
                                            <td>Clean database</td>
                                            <td>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-warning" style={{width:`70%`}}></div>
                                                </div>
                                            </td>
                                            <td><span className="badge bg-warning">70%</span></td>
                                        </tr>
                                        <tr>
                                            <td>3.</td>
                                            <td>Cron job running</td>
                                            <td>
                                                <div className="progress progress-xs progress-striped active">
                                                    <div className="progress-bar bg-primary" style={{width:`30%`}}></div>
                                                </div>
                                            </td>
                                            <td><span className="badge bg-primary">30%</span></td>
                                        </tr>
                                        <tr>
                                            <td>4.</td>
                                            <td>Fix and squish bugs</td>
                                            <td>
                                                <div className="progress progress-xs progress-striped active">
                                                    <div className="progress-bar bg-success" style={{width:`90%`}}></div>
                                                </div>
                                            </td>
                                            <td><span className="badge bg-success">90%</span></td>
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