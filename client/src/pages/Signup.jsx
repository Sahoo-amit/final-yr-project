import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useTokenContext } from "../context/TokenContext";

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
    role: "student"
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const { storeToken } = useTokenContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const result = await response.json();
        storeToken(result.token);
        toast.success("Registration successful");
        navigate("/");
      } else {
        toast.error("Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error occurred during registration");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-6 text-black">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Signup</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="role" className="block text-sm font-semibold text-gray-700">Select Role</label>
            <select
              name="role"
              id="role"
              value={user.role}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-semibold text-gray-700">Enter Name</label>
            <input
              type="text"
              name="username"
              id="username"
              required
              value={user.username}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={user.email}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">Phone</label>
            <input
              type="number"
              name="phone"
              id="phone"
              required
              value={user.phone}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              required
              value={user.password}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
