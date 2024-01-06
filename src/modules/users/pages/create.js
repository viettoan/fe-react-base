import ContentHeader from "../../../components/contentHeader";
import UserFormElement from "../_elements/form";
import {useState} from "react";

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
      <section className={'contentHeader'}>
        <div className={'container-fluid'}>
          <div className={'row'}>
            <div className={'col-12'}>
              <div className="card mb-3">
                <div className="card-header text-white bg-primary">
                  <h3 className="card-title">{title}</h3>
                </div>
                <UserFormElement/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
