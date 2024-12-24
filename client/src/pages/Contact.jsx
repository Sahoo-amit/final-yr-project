import React, { useEffect, useState } from 'react';
import { useTokenContext } from '../context/TokenContext';
import { toast } from 'react-toastify';

const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(contact)
      });
      if (response.ok) {
        setContact((prevData) => ({
          ...prevData,
          message: ""
        }));
        toast.success(`Message sent successfully`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { user } = useTokenContext();
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
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 flex items-center justify-center text-black">
      <div className="max-w-4xl w-full text-black bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        
        <div className="md:w-1/2 bg-cover bg-center" style={{ backgroundImage: 'url("https://via.placeholder.com/600x400")' }}>
          <div className="h-full flex items-center justify-center bg-black bg-opacity-40">
            <h2 className="text-white text-4xl font-bold text-center">Contact Us</h2>
          </div>
        </div>

        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-center text-purple-600 mb-6">We're here to help!</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-gray-700 font-medium mb-1">Enter Name</label>
              <input
                type="text"
                name="username"
                id="username"
                readOnly
                value={contact.username}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                readOnly
                value={contact.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">Mobile</label>
              <input
                type="number"
                name="phone"
                id="phone"
                readOnly
                value={contact.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                name="message"
                id="message"
                rows="4"
                required
                value={contact.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-200"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

