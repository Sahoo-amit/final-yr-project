import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';

const CourseDetails = () => {
    const [courseDetails, setCourseDetails] = useState(null);
    const params = useParams();
    const navigate = useNavigate();

    const handlenavigation = () => {
        navigate(-1);
    };

    const loadCourses = async () => {
        try {
            const response = await fetch(`http://localhost:4000/api/course/${params.id}`, {
                method: "GET"
            });
            const result = await response.json();
            if (response.ok) {
                setCourseDetails(result.response);
            } else {
                console.log("Error fetching course details:", result);
            }
        } catch (error) {
            console.log("Error in fetch:", error);
        }
    };

    useEffect(() => {
        if (params.id) {
            loadCourses();
        }
    }, [params.id]);

    if (!courseDetails) {
        return <p className="text-center text-xl font-semibold mt-4">Loading course details...</p>;
    }

   
    const handleBuyNow = () => {
        // navigate(`/payment/${params.id}`)
        navigate('#')
    };

    return (
        <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row items-center md:items-start space-x-8">
                <img
                    src={courseDetails.courseImage}
                    alt={courseDetails.courseName}
                    className="w-48 h-48 md:w-72 md:h-72 object-cover rounded-lg"
                />
                <div className="flex flex-col mt-4 md:mt-0">
                    <h1 className="text-3xl font-bold text-gray-800">{courseDetails.courseName}</h1>
                    <p className="text-lg text-gray-600 mt-2">{courseDetails.courseDescription}</p>
                    <p className="mt-4 text-sm text-gray-500"><strong>Instructor:</strong> {courseDetails.courseInstructor}</p>
                    <p className="mt-2 text-sm text-gray-500"><strong>Price:</strong> ${courseDetails.coursePrice}</p>
                    <p className="mt-2 text-sm text-gray-500"><strong>Duration:</strong> {courseDetails.courseDuration}</p>
                    <p className="mt-2 text-sm text-gray-500"><strong>Enrolled Students:</strong> {courseDetails.courseEnrolledStudents}</p>
                    <p className="mt-2 text-sm text-gray-500"><strong>Created on:</strong> {new Date(courseDetails.courseCreatedAt).toLocaleDateString()}</p>
                    
                    <button
                        onClick={handleBuyNow}
                        className="mt-6 py-2 px-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300"
                    >
                        Buy Now
                    </button>

                    <button
                        onClick={handlenavigation}
                        className="mt-4 py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Go back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;


