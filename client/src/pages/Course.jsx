import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Course = () => {
  const [course, setCourse] = useState([])

  const loadCourses = async()=>{
    try {
      const response = await fetch(`http://localhost:4000/api/course`,{
        method: "GET"
      })
      const result = await response.json()
      if(response.ok){
        setCourse(result.response)
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
          course.map((item, index)=>{
            const {courseCreatedAt,courseDescription,courseDuration,courseEnrolledStudents,courseImage,courseInstructor,courseName,coursePrice,teacherId} = item
            return(
              <li key={index}>
                <img src={courseImage} alt="courseImage" style={{ width: "200px", height: "200px" }}/>
                <h1>Course name : {courseName}</h1>
                <h1>Description : {courseDescription}</h1>
                <button><Link to={`/course/${courseName}`}>View details</Link></button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Course