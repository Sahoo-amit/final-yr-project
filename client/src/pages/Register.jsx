import React, { useState } from 'react';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = (field) => {
    if (field === 'password') {
      setShowPassword((prev) => !prev);
    } else {
      setShowConfirmPassword((prev) => !prev);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-6 py-16 md:pt-24 bg-gradient-to-br from-black via-blue-900 to-black ">
      {/* Dark Blue Blur Overlay */}
      <div className="absolute inset-0 bg-blue-900 opacity-60 blur-lg -z-10"></div>

      <div className="relative w-full max-w-xl p-8 rounded-2xl shadow-lg bg-white/20 backdrop-blur-lg border-[1px] border-white/50 mb-44">
        {/* Gradient Border Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-700 to-blue-900 opacity-40 rounded-2xl blur-md -z-10"></div>

        <h1 className="mb-6 text-3xl font-extrabold text-center text-white drop-shadow-lg">
          Join the millions learning to code with <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">LearnSphere</span> for free
        </h1>
        <h2 className="mb-2 text-xl font-semibold text-center text-white drop-shadow-md">
          Build skills for today, tomorrow, and beyond.
        </h2>
        <h2 className="mb-8 text-xl font-semibold text-center text-white drop-shadow-md">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Education</span> to future-proof your career.
        </h2>

        <form className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-semibold text-white drop-shadow-md">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full p-4 text-gray-700 placeholder-gray-600 transition-all duration-300 border rounded-lg shadow-md bg-white/60 border-white/50 focus:outline-none focus:ring-4 focus:ring-blue-400"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-semibold text-white drop-shadow-md">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              className="w-full p-4 text-gray-700 placeholder-gray-600 transition-all duration-300 border rounded-lg shadow-md bg-white/60 border-white/50 focus:outline-none focus:ring-4 focus:ring-blue-400"
            />
          </div>

          {/* Phone Number Field */}
          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-semibold text-white drop-shadow-md">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              placeholder="Phone Number"
              className="w-full p-4 text-gray-700 placeholder-gray-600 transition-all duration-300 border rounded-lg shadow-md bg-white/60 border-white/50 focus:outline-none focus:ring-4 focus:ring-blue-400"
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-semibold text-white drop-shadow-md">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Password"
                className="w-full p-4 text-gray-700 placeholder-gray-600 transition-all duration-300 border rounded-lg shadow-md bg-white/60 border-white/50 focus:outline-none focus:ring-4 focus:ring-blue-400"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility('password')}
                className="absolute text-gray-600 transform -translate-y-1/2 right-4 top-1/2 hover:text-blue-400"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div>
            <label htmlFor="confirmPassword" className="block mb-2 text-sm font-semibold text-white drop-shadow-md">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                placeholder="Confirm Password"
                className="w-full p-4 text-gray-700 placeholder-gray-600 transition-all duration-300 border rounded-lg shadow-md bg-white/60 border-white/50 focus:outline-none focus:ring-4 focus:ring-blue-400"
              />
              <button
                type="button"
                onClick={() => togglePasswordVisibility('confirmPassword')}
                className="absolute text-gray-600 transform -translate-y-1/2 right-4 top-1/2 hover:text-blue-400"
              >
                {showConfirmPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          {/* Register Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 font-bold text-white transition-all duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-blue-400 hover:scale-105 hover:to-pink-500 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Register
            </button>
          </div>

          {/* Link to Login */}
          <div className="mt-4 text-center">
            <p className="text-sm text-white">
              Already have an account?{' '}
              <a href="/login" className="text-blue-400 transition-all duration-300 hover:text-blue-600">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
