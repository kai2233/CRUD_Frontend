import React, {useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { fetchSingleStudentThunk } from "../../redux/students/students.action";
import DisplaySingleStudent from "../../components/DisplaySingleStudent";
import {useLocation} from "react-router-dom";

const SingleStudent = () => {
    const location = useLocation();
    const studentId = location.state.studentId;
    const student = useSelector((state) => state.students.singleStudent);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchSingleStudentThunk(studentId));
    }, []);
    return (
        <div>
            <h1>Student Profile</h1>
            {student.length!== 0? (<DisplaySingleStudent/>) : (<h2>unchaught error</h2>)}
        </div>
    )
};

export default SingleStudent;