import React, { useEffect, useState } from 'react'
import { useTokenContext } from '../context/TokenContext'

const Contact = () => {
  const [contact, setContact] = useState({
    username:"",
    email:"",
    phone:"",
    message:""
  })

  const handleChange =(e)=>{
    let {name, value} = e.target
    setContact({
      ...contact, [name]:value
    })
  }

  const handleSubmit =async(e)=>{
    e.preventDefault()
    try {
      const response = await fetch(`http://localhost:4000/api/contact`,{
        method: "POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(contact)
      })
      if(response.ok){
        setContact((prevData)=>({
            ...prevData,
            message:""
        }))
      }
    } catch (error) {
      console.log(error)
    }
  }

  const {user} = useTokenContext()
  useEffect(() => {
    if (user) {
        setContact({
            username: user.username || '',
            email: user.email || '',
            phone: user.phone || '',
            message: '',
        });
    }
}, [user]);

  return (
    <div>
      <div></div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Enter Name</label>
          <input type="text" name="username" id="username" required value={contact.username} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required value={contact.email} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="phone">Mobile</label>
          <input type="number" name="phone" id="phone" readOnly value={contact.phone} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="10" required value={contact.message} onChange={handleChange}/>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Contact