import { useEffect, useState } from "react";
import { useTokenContext } from "../../context/TokenContext";
import { toast } from 'react-toastify';

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

  useEffect(()=>{
    getUserData()
  },[])

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
                        <td>Edit</td>
                        <td>Update</td>
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