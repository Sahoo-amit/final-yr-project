import { NavLink } from 'react-router-dom'
import { useTokenContext } from '../context/TokenContext'

const Header = () => {
  const {isLogout} = useTokenContext()
  return (
    <div>
        <div>
            <h1>Logo</h1>
        </div>
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About US</NavLink>
            <NavLink to='/course'>Courses</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </div>
        <div>
          {
            isLogout ? 
            <>
              <NavLink to='/login'>Login</NavLink>
              <NavLink to='/signup'>Register</NavLink>
            </>
            :
            <NavLink to='/logout'>Logout</NavLink>
          }
        </div>
    </div>
  )
}

export default Header