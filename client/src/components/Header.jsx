import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <div>
            <h1>logo</h1>
        </div>
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/course'>Courses</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
        <ul>
            <li><NavLink to='/login'>Login</NavLink></li>
            <li><NavLink to='/register'>Register</NavLink></li>
            <li><NavLink to='/logout'>Logout</NavLink></li>
        </ul>
    </div>
  )
}

export default Header