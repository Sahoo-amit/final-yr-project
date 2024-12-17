import React from "react";

const Contact = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen px-6 py-16 pt-32 bg-gradient-to-br from-black via-blue-900 to-black">
      {/* Dark Blue Blur Overlay */}
      <div className="absolute inset-0 bg-blue-900 opacity-60 blur-lg -z-10"></div>

      <div className="flex flex-col items-center justify-between w-full max-w-screen-xl mb-32 space-y-8 md:flex-row md:space-y-0 md:space-x-12">
        {/* Left Side (Heading and Text) */}
        <div className="w-full px-4 text-center md:w-1/2 md:text-left">
          <h1 className="text-4xl font-extrabold text-white transition-transform transform md:text-5xl drop-shadow-lg hover:scale-105">
            Let's Connect!
          </h1>
          <p className="text-base md:text-lg text-white opacity-90 max-w-[500px] mx-auto mt-4 drop-shadow-sm">
            Share your thoughts or inquiries. We’d love to hear from you and bring your ideas to life.
          </p>
        </div>

        {/* Right Side (Form) */}
        <div className="relative w-full md:w-1/2 p-6 md:p-8 rounded-2xl shadow-2xl bg-white/30 backdrop-blur-lg border-[1px] border-white/50 max-w-[500px] mx-auto md:max-w-lg">
          {/* Gradient Border Overlay */}
          <div className="absolute inset-0 opacity-50 bg-gradient-to-br from-blue-500 via-purple-600 to-blue-900 rounded-2xl -z-10 blur-md"></div>

          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-semibold text-white drop-shadow-md">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
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
                placeholder="you@example.com"
                className="w-full p-4 text-gray-700 placeholder-gray-600 transition-all duration-300 border rounded-lg shadow-md bg-white/60 border-white/50 focus:outline-none focus:ring-4 focus:ring-blue-400"
              />
            </div>

            {/* Contact Number Field */}
            <div>
              <label htmlFor="phnNo" className="block mb-2 text-sm font-semibold text-white drop-shadow-md">
                Contact Number
              </label>
              <input
                type="tel"
                id="phnNo"
                placeholder="123-456-7890"
                className="w-full p-4 text-gray-700 placeholder-gray-600 transition-all duration-300 border rounded-lg shadow-md bg-white/60 border-white/50 focus:outline-none focus:ring-4 focus:ring-blue-400"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-semibold text-white drop-shadow-md">
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Write your message here..."
                className="w-full p-4 text-gray-700 placeholder-gray-600 transition-all duration-300 border rounded-lg shadow-md bg-white/60 border-white/50 focus:outline-none focus:ring-4 focus:ring-blue-400"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 font-bold text-white transition-all duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-blue-400 hover:to-pink-500 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Send Message 🚀
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Decorative Gradient */}
      <div className="absolute bottom-0 rounded-full w-80 h-80 bg-gradient-to-tr from-blue-400 to-blue-900 blur-3xl opacity-30"></div>
    </div>
  );
};

export default Contact;
