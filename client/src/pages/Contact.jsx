import React, { useState } from 'react'

const Contact = () => {
  const [contact, setContact] = useState({
    username:"",
    email:"",
    message:""
  })

  const handleChange =(e)=>{
    let {name, value} = e.target
    setContact({
      ...Contact, [name]:value
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
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

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
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="10"/>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Contact