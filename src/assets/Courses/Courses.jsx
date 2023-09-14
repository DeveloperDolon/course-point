import { useEffect } from "react";
import { useState } from "react"
import PropTypes from 'prop-types';
import Course from "./Course";


export default function Courses({handleCarts}) {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("../../../public/data.json")
        .then(res => res.json())
        .then(data => setCourses(data));
    },[])

  return (
    <div className="grid grid-cols-3 gap-5 items-stretch">
      {
        courses.map(item => <Course key={item.id} item={item} handleCarts={handleCarts}></Course>)
      }
    </div>
  )
}

Courses.propTypes = {
    handleCarts: PropTypes.func
}
