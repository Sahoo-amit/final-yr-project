import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Signup from './pages/Signup'
import Course from './pages/Course'
import CourseDetails from './pages/CourseDetails'
import UserData from './components/admin/UserData'
import AdminLayout from './components/admin/AdminLayout'
import ContactDetails from './components/admin/ContactDetails'
import UpdateData from './components/admin/UpdateData'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/course' element={<Course/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/logout' element={<Logout/>}/>
          <Route path='/course/:id' element={<CourseDetails/>}/>
          <Route path='/admin' element={<AdminLayout/>}>
              <Route path='userdata' element={<UserData/>}/>
              <Route path='contactdetails' element={<ContactDetails/>}/>
              <Route path='userdata/update/:id' element={<UpdateData/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App