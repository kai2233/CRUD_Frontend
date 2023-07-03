import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllStudentsThunk} from "../redux/students/students.action";
import DisplayStudents from "../components/DisplayStudents";
const Students = () => {

  const allStudents = useSelector((state) => state.students.allStudents);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllStudentsThunk());
  }, []);
  
  return (
    <div>
      <h1>Hi! this is students page</h1>
      {allStudents.length!==0?(<DisplayStudents/>):(<h3>No students found</h3>)}
    </div>
  );
};

export default Students;