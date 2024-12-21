import { useEffect, useState } from "react"
import { useTokenContext } from "../../context/TokenContext"
import { toast } from "react-toastify"

const ContactDetails = () => {
  const [contact, setContact] = useState([])
  const { authorization } = useTokenContext()

  const getContact = async()=>{
    try {
      const response = await fetch(`http://localhost:4000/admin/contact`,{
        method:"GET",
        headers:{
          "Authorization" : authorization
        }
      })
      if(response.ok){
        const result = await response.json()
        setContact(result)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const removeContact = async(id)=>{
    try {
      const response = await fetch(`http://localhost:4000/admin/contact/delete/${id}`,{
        method: "DELETE",
        headers:{
          "Authorization": authorization
        }
      })
      if(response.ok){
        toast.success(`Contact removed successfully`)
      }else{
        toast.error(`Failed to delete contact`)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getContact()
  },[getContact, removeContact])

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email id</th>
            <th>Phone number</th>
            <th>Message</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {contact.map((item)=>{
            const {username, email, message, phone, _id } = item
            return(
              <tr key={_id}>
                <td>{username}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{message}</td>
                <td><button onClick={()=>removeContact(_id)}>Remove</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ContactDetails