import React from "react";

const Home = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen px-6 py-16 pt-32 bg-gradient-to-br from-black via-blue-900 to-black">
      {/* Dark Blue Blur Overlay */}
      <div className="absolute inset-0 bg-blue-900 opacity-60 blur-lg -z-10"></div>

      <div className="flex flex-col items-center justify-between w-full max-w-screen-xl mb-32 space-y-8 md:flex-row md:space-y-0 md:space-x-12">
        {/* Left Side (Heading and Text) */}
        <div className="w-full px-4 text-center md:w-1/2 md:text-left">
          <h1 className="text-4xl font-extrabold text-white transition-transform transform md:text-5xl drop-shadow-lg hover:scale-105">
            Welcome to LearnSphere!
          </h1>
          <p className="text-base md:text-lg text-white opacity-90 max-w-[500px] mx-auto mt-4 drop-shadow-sm">
            Explore a variety of online courses and develop skills that will
            prepare you for the future of technology. Join our learning community
            today!
          </p>
        </div>

        {/* Right Side (Call to Action) */}
        <div className="relative w-full md:w-1/2 p-6 md:p-8 rounded-2xl shadow-2xl bg-white/30 backdrop-blur-lg border-[1px] border-white/50 max-w-[500px] mx-auto md:max-w-lg">
          {/* Gradient Border Overlay */}
          <div className="absolute inset-0 opacity-50 bg-gradient-to-br from-blue-500 via-purple-600 to-blue-900 rounded-2xl -z-10 blur-md"></div>

          <form className="space-y-6">
            {/* Call to Action */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-white">Get Started Today!</h3>
              <p className="mt-2 text-sm text-white opacity-80">
                Ready to start learning? Sign up for our courses and join the
                community of learners.
              </p>
            </div>

            {/* Button */}
            <button
              type="button"
              className="w-full py-3 mt-6 font-bold text-white transition-all duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-blue-400 hover:to-pink-500 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Start Learning 🚀
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Decorative Gradient */}
      <div className="absolute bottom-0 rounded-full w-80 h-80 bg-gradient-to-tr from-blue-400 to-blue-900 blur-3xl opacity-30"></div>
    </div>
  );
};

export default Home;
