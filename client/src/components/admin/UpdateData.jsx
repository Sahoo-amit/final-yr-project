import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTokenContext } from "../../context/TokenContext";
import { toast } from "react-toastify";

const UpdateData = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
    role: "",
  });
  const navigate = useNavigate()
  const params = useParams();
  const { authorization } = useTokenContext();

  const singleUser = async () => {
    try {
      const response = await fetch(`http://localhost:4000/admin/user/singleuser/${params.id}`,{
          method: "GET",
          headers: {
            Authorization: authorization,
          },
        });
      if (response.ok) {
          const result = await response.json();
          setData(result);
      }
    } catch (err) {
        console.log(err)
    };
  }
  useEffect(() => {
    singleUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:4000/admin/user/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            Authorization: authorization,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
      console.log(response)
      if (response.ok) {
        toast.success(`User updated successfully`);
        navigate('/admin/userdata')
      } else {
        toast.error(`Failed to update user.`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={data.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="number"
            name="phone"
            id="phone"
            value={data.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="role">Role</label>
          <input
            type="text"
            name="role"
            id="role"
            value={data.role}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateData
