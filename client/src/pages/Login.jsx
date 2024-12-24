import React, { useState } from 'react';
import { useTokenContext } from '../context/TokenContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user, [name]: value
    });
  };

  const { storeToken } = useTokenContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      });
      const result = await response.json();
      if (response.ok) {
        storeToken(result.token);
        toast.success(`Login successful`);
        navigate('/');
      } else {
        toast.error(`Login failed: ${result.message || 'Please try again.'}`);
      }
    } catch (error) {
      console.log(error);
      toast.error('Error during login');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-black">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
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
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
