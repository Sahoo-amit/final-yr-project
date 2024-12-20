import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'

const CourseDetails = () => {
    const [courseDetails, setCourseDetails] = useState([])
    const params = useParams()

    const loadCourses = async()=>{
        try {
          const response = await fetch(`http://localhost:4000/api/course`,{
            method: "GET"
          })
          const result = await response.json()
          if(response.ok){
            setCourseDetails(result.response)
            console.log(result.response)
          }
        } catch (error) {
          console.log(error)
        }
      }
    
      useEffect(()=>{
        loadCourses()
      },[])


  return (
    <div>
        <ul>
        {
          courseDetails.map((item, index)=>{
            const {courseCreatedAt,courseDescription,courseDuration,courseEnrolledStudents,courseImage,courseInstructor,courseName,coursePrice,teacherId} = item
            return(
              <li key={index}>
                <img src={courseImage} alt="courseImage" style={{ width: "200px", height: "200px" }}/>
                <h1>Course name : {courseName}</h1>
                <h1>Description : {courseDescription}</h1>
                <p>Instructor Name : {courseInstructor}</p>
                <p>Price : {coursePrice}</p>
                <p>Duration : {courseDuration}</p>
                <p>Student enrolled: {courseEnrolledStudents}</p>
                <p>Created on : {courseCreatedAt}</p>
                <button onClick={()=>handle}></button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default CourseDetails