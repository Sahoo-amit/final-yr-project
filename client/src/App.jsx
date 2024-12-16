import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Course from './pages/Course'
import Login from './pages/Login'
import Register from './pages/Register'
import Logout from './pages/Logout'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/course" element={<Course/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/logout" element={<Logout/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App