import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen px-6 py-16 md:pt-24 bg-gradient-to-br from-black via-blue-900 to-black">
      {/* Dark Blue Blur Overlay */}
      <div className="absolute inset-0 bg-blue-900 opacity-60 blur-lg -z-10"></div>

      <div className="relative w-full max-w-screen-xl p-8 rounded-2xl shadow-lg bg-white/20 backdrop-blur-lg border-[1px] border-white/50 mb-32 `">
        {/* Gradient Border Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-700 to-blue-900 opacity-40 rounded-2xl blur-md -z-10"></div>

        <h1 className="mb-8 text-4xl font-extrabold text-center text-white drop-shadow-lg">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            LearnSphere
          </span>
        </h1>
        <p className="max-w-3xl mx-auto mb-8 text-lg text-center text-white opacity-90 drop-shadow-sm">
          At LearnSphere, we believe in empowering individuals with the skills
          necessary for the future. Our platform offers a variety of online
          courses in programming, web development, and technology, designed to
          make learning accessible, engaging, and practical.
        </p>

        <h2 className="mb-6 text-3xl font-bold text-center text-white drop-shadow-md">
          Our Mission
        </h2>
        <p className="max-w-3xl mx-auto mb-8 text-lg text-center text-white opacity-90 drop-shadow-sm">
          Our mission is to provide high-quality education that equips learners
          with the skills to excel in a rapidly changing world. With a focus on
          practical knowledge, we aim to bridge the gap between traditional
          education and real-world applications.
        </p>

        <h2 className="mb-6 text-3xl font-bold text-center text-white drop-shadow-md">
          Why Choose Us?
        </h2>
        <ul className="max-w-2xl mx-auto space-y-4 text-lg text-left text-white">
          <li className="flex items-center">
            <span className="mr-4 text-green-400">✔️</span>
            Industry-relevant courses designed by experts.
          </li>
          <li className="flex items-center">
            <span className="mr-4 text-green-400">✔️</span>
            Flexible learning, study at your own pace.
          </li>
          <li className="flex items-center">
            <span className="mr-4 text-green-400">✔️</span>
            24/7 access to learning resources and support.
          </li>
        </ul>

        <h2 className="mt-12 text-3xl font-bold text-center text-white drop-shadow-md">
          Join the LearnSphere Community
        </h2>
        <p className="max-w-3xl mx-auto mb-8 text-lg text-center text-white opacity-90 drop-shadow-sm">
          Ready to start your learning journey? Join us today and begin building
          the skills that will shape your future.
        </p>
        <div className="text-center">
          <NavLink
            to="/register" // Change this to the desired path for the "Register" page
            className="px-6 py-3 font-bold text-white transition-all duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-blue-400 hover:scale-105 hover:to-pink-500 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Join Now
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default About;
