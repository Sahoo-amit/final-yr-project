import { Link } from "react-router-dom";
import { useTokenContext } from "../context/TokenContext";

const Home = () => {
  const { isLogout } = useTokenContext();

  return (
    <div className="bg-gradient-to-b from-orange-100 to-purple-100 min-h-screen">

      <div className="text-center py-12 bg-gradient-to-r from-orange-500 to-purple-700 text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to EduLearn!</h1>
        <p className="text-lg mb-6">
          Empowering Students to Learn, Grow, and Succeed in Their Careers.
        </p>
        {isLogout ? (
          <Link
            to="/login"
            className="bg-white text-orange-500 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-orange-100 transition duration-300"
          >
            Login to Explore
          </Link>
        ) : (
          <Link
            to="/placement"
            className="bg-white text-purple-700 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-purple-100 transition duration-300"
          >
            Explore Placement Topics
          </Link>
        )}
      </div>

      <div className="w-[90%] max-w-[1200px] mx-auto py-12">
        <h2 className="text-2xl font-bold text-center mb-8 text-purple-700">
          Why Choose EduLearn?
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-orange-500 mb-2">
              Expert Mentors
            </h3>
            <p>Learn from industry experts with years of experience.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-purple-500 mb-2">
              Placement Focus
            </h3>
            <p>Get access to top placement resources and mock tests.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-orange-500 mb-2">
              Interactive Learning
            </h3>
            <p>Engage in hands-on projects and real-world challenges.</p>
          </div>
        </div>
      </div>

      <div className="bg-purple-700 text-white py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Begin Your Journey?</h2>
        {isLogout ? (
          <Link
            to="/signup"
            className="bg-orange-500 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-orange-600 transition duration-300"
          >
            Sign Up Now
          </Link>
        ) : (
          <Link
            to="/course"
            className="bg-orange-500 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-orange-600 transition duration-300"
          >
            Explore Courses
          </Link>
        )}
      </div>

      <div className="w-[90%] max-w-[1200px] mx-auto py-12">
        <h2 className="text-2xl font-bold text-center mb-8 text-purple-700">
          Hear from Our Students
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <p className="italic">
              "EduLearn helped me secure my dream job! The placement resources
              are outstanding."
            </p>
            <p className="mt-4 font-semibold text-orange-500">- Ankit Sharma</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <p className="italic">
              "The courses are so interactive and easy to follow. I highly
              recommend EduLearn!"
            </p>
            <p className="mt-4 font-semibold text-purple-500">- Priya Verma</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
