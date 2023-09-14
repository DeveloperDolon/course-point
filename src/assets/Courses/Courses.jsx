import { useEffect } from "react";
import { useState } from "react"
import Course from "./Course";


export default function Courses() {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("../../../public/data.json")
        .then(res => res.json())
        .then(data => setCourses(data));
    },[])

  return (
    <div className="grid grid-cols-3 gap-5 items-stretch">
      {
        courses.map(item => <Course key={item.id} item={item}></Course>)
      }
    </div>
  )
}
