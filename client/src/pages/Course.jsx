import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Course = () => {
  const [course, setCourse] = useState([]);

  const loadCourses = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/course`, {
        method: "GET"
      });
      const result = await response.json();
      if (response.ok) {
        setCourse(result.response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadCourses();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-blue-500 p-8">
      <h2 className="text-4xl font-bold text-center text-white mb-8">Available Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {
          course.map((item, index) => {
            const { courseDescription, courseImage, courseName, _id } = item;
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <img src={courseImage} alt="courseImage" className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-purple-600 mb-2">{courseName}</h3>
                  <p className="text-gray-600 mb-4">{courseDescription}</p>
                  <Link to={`/course/${_id}`} className="text-blue-500 hover:text-blue-700 font-medium">View details</Link>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Course;
