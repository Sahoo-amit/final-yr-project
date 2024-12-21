import React, { useState } from 'react'
import { useTokenContext } from '../context/TokenContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Login = () => {
    const [user, setUser] = useState({
        email:"",
        password:''
      })
      const navigate = useNavigate()
      const handleChange =(e)=>{
        let {name, value} = e.target
        setUser({
          ...user, [name]:value
        })
      }
      const {storeToken} = useTokenContext()
      const handleSubmit =async(e)=>{
        e.preventDefault()
        try {
          const response = await fetch(`http://localhost:4000/api/login`,{
            method: "POST",
            headers:{
              "Content-Type":"application/json"
            },
            body: JSON.stringify(user)
          })
          const result = await response.json()
          if(response.ok){
            storeToken(result.token)
            toast.success(`Login successful`)
            navigate('/')
          }
          console.log(response)
        } catch (error) {
          console.log(error)
        }
      }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required value={user.email} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required value={user.password} onChange={handleChange}/>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login