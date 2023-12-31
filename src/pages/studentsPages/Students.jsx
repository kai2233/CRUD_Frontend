import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllStudentsThunk} from "../../redux/students/students.action";
import DisplayStudents from "../../components/DisplayStudents";
import { Link } from "react-router-dom";
import "./index.css";
const Students = () => {

  const allStudents = useSelector((state) => state.students.allStudents);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllStudentsThunk());
  }, []);

  return (
    <div className="format-students-view">
      <h1>All Students</h1>
      <Link to = "/addStudent"><button>click to add students</button></Link>
      {allStudents.length!==0?(<DisplayStudents/>):(<h3>No students found</h3>)}
    </div>
  );
};

export default Students;