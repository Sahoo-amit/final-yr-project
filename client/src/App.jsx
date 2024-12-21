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
<<<<<<< HEAD
import UserData from './components/admin/UserData'
=======
import Register from './pages/Register'
import StudentSignup from './pages/StudentSignup'
import TeacherSignup from './pages/TeacherSignup'
import StudentLogin from './pages/StudentLogin'
import TeacherLogin from './pages/TeacherLogin'
import AdminLogin from './pages/AdminLogin'


>>>>>>> a595d30cf05a6b0b1d61a8b40783e2c17f905b41

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
          <Route path='/student-login' element={<StudentLogin/>}/>
          <Route path='/teacher-login' element={<TeacherLogin/>}/>
          <Route path='/admin-login' element={<AdminLogin/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/logout' element={<Logout/>}/>
          <Route path='/student-signup' element={<StudentSignup/>}/>
          <Route path='/teacher-signup' element={<TeacherSignup/>}/>
          <Route path='/course/:id' element={<CourseDetails/>}/>
          <Route path='/admin' element={<UserData/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App