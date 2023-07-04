import {useSelector,useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { deleteStudentThunk } from "../redux/students/students.action";
const DisplaySingleStudent = () => {
    const student = useSelector((state) => state.students.singleStudent);
    const dispatch = useDispatch();
    const deleteStudent = (id) => {
        dispatch(deleteStudentThunk(id));
    }
    return (
        <div>
            <img src= {student[0].imageUrl} alt={"error"}/>
            <Link to = "/allStudents" ><button onClick = {()=>deleteStudent(student[0].id)}>X</button></Link>
            <Link to = "/editStudent" state ={{studentId:student[0].id}}>Edit</Link>
            <h1>Name: {student[0].firstName} {student[0].lastName}</h1>
            <h2>Email: {student[0].email}</h2>
            <h3>gpa: {student[0].gpa}</h3>
            <h3>Enrolled Campus:</h3>
            {student[0].campusId!==null?(<h2>{student[0].campus.name}</h2>):(<h4>THIS STUDENT DIDN'T ENROLL IN ANY CAMPUS</h4>)}
        </div>
    );

}

export default DisplaySingleStudent;