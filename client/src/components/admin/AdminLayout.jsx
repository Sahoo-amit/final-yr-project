import { NavLink, Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div>
        <ul>
            <li><NavLink to='userdata'>User data</NavLink></li>
            <li><NavLink to='contactDetails'>Contact details</NavLink></li>
        </ul>
        <Outlet/>
    </div>
  )
}

export default AdminLayout