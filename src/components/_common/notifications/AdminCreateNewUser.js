import { NavLink } from "react-router-dom";

export default function AdminCreateNewUser({ data }) {
  return (
    <>
      <p>{data.content}</p>
      <NavLink
        to={data.redirect_url}
        className={"nav-link"}
        end
      >
        Xem chi tiết
      </NavLink>
    </>
  )
}