import { useEffect, useState } from "react";
import { useTokenContext } from "../../context/TokenContext";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";

const UserData = () => {
  const [userData, setUserData] = useState([])
  const { authorization } = useTokenContext()

  const getUserData = async()=>{
    try {
        const response = await fetch(`http://localhost:4000/admin/user`,{
            method: "GET",
            headers:{
                "Authorization": authorization
            }
        })
        const result = await response.json()
        if(response.ok){
            setUserData(result.userData)
        }else{
            toast.error(`User details not found`)
        }
    } catch (error) {
        console.log(error)
    }
  }
  
  const removeUser =async(id)=>{
      try {
          const response = await fetch(`http://localhost:4000/admin/user/delete/${id}`,{
              method:"DELETE",
              headers:{
               "Authorization": authorization 
            }
        })
        if(response.ok){
            toast.success(`User removed successfully`)
        }else{
            toast.error(`Failed to remove user.`)
        }
    } catch (error) {
        console.log(error)
    }
}

useEffect(()=>{
  getUserData()
},[removeUser, getUserData])

  return (
    <div>
      <h1>User Details</h1>
      <table>
        <thead>
          <tr>
            <th>Full name</th>
            <th>Email address</th>
            <th>Mobile number</th>
            <th>Admin</th>
            <th>Role of user</th>
            <th>Update user</th>
            <th>Remove user</th>
          </tr>
        </thead>
        <tbody>
          {
            userData.map((item)=>{
                const { username, email, role, phone, isAdmin, _id } = item
                return (
                    <tr key={_id}>
                        <td>{username}</td>
                        <td>{email}</td>
                        <td>{phone}</td>
                        <td>{isAdmin? "Yes":"No"}</td>
                        <td>{role}</td>
                        <td><button><Link to={`/admin/userdata/update/${_id}`}>Edit</Link></button></td>
                        <td><button onClick={()=>removeUser(_id)}>Remove</button></td>
                    </tr>
                )
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default UserData;
