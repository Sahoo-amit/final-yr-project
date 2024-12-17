import React, { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-6 py-16 pt-24 bg-gradient-to-br from-black via-blue-900 to-black">
      {/* Dark Blue Blur Overlay */}
      <div className="absolute inset-0 bg-blue-900 opacity-60 blur-lg -z-10"></div>

      <div className="relative w-full max-w-md p-8 rounded-2xl shadow-lg bg-white/20 backdrop-blur-lg border-[1px] border-white/50">
        {/* Gradient Border Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-700 to-blue-900 opacity-40 rounded-2xl blur-md -z-10"></div>

        <h1 className="mb-8 text-4xl font-extrabold text-center text-white drop-shadow-lg">Login</h1>

        <form className="space-y-6">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-semibold text-white drop-shadow-md"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full p-4 text-gray-700 placeholder-gray-600 transition-all duration-300 border rounded-lg shadow-md bg-white/60 border-white/50 focus:outline-none focus:ring-4 focus:ring-blue-400"
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-semibold text-white drop-shadow-md"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                className="w-full p-4 text-gray-700 placeholder-gray-600 transition-all duration-300 border rounded-lg shadow-md bg-white/60 border-white/50 focus:outline-none focus:ring-4 focus:ring-blue-400"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute text-gray-600 transform -translate-y-1/2 right-4 top-1/2 hover:text-blue-400"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-4 focus:ring-blue-500"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-white">Remember Me</label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 font-bold text-white transition-all duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-blue-400 hover:scale-105 hover:to-pink-500 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Login
          </button>

          {/* Link to Sign Up */}
          <div className="mt-4 text-center">
            <p className="text-sm text-white">
              Don’t have an account?{" "}
              <a href="/signup" className="text-blue-400 transition-all duration-300 hover:text-blue-600">
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
