import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStudentThunk } from "../../redux/students/students.action";
import { useLocation,Link } from "react-router-dom";


const EditStudent = () => {
    const location = useLocation();
    const targetStudentId = location.state.studentId;
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [gpa, setGpa] = useState();
    const [imageUrl, setImageUrl] = useState();
    const AlterStudent = (e) => {
        e.preventDefault();
        const changedValue = {
            id:targetStudentId,
            firstName,
            lastName,
            email,
            gpa,
            imageUrl
        };
        console.log(changedValue);
        dispatch(updateStudentThunk(changedValue));
    };
    // const targetStudent = useSelector((state) => state.students.updatedStudent);
    return (
        <div className="student-page-container">
            <h1>Edit Student Form</h1>
            <form onSubmit = {AlterStudent}>
                <label>First Name</label>
                <input type="text"  placeholder = "First Name..." onChange={(e) => setFirstName(e.target.value)}/>
                <label>Last Name</label>
                <input type="text"  placeholder = "Last Name..." onChange={(e) => setLastName(e.target.value)}/>
                <label>Email</label>
                <input type="text"  placeholder = "Email..." onChange={(e) => setEmail(e.target.value)}/>
                <label>GPA</label>
                <input type="number" min="0" max="4" step = "0.01" placeholder = "GPA" onChange={(e) => setGpa(e.target.value)}/>
                <label>Image</label>
                <input type="text"  placeholder = "Image Url..." onChange={(e) => setImageUrl(e.target.value)}/>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
            {/* {targetStudent.id===targetStudentId?(<h1>Edited Successfully</h1>):(null)} */}
            <Link to="/singleStudent" state ={{studentId:targetStudentId}}><button>Go Back</button></Link>
        </div>
    )
}
export default EditStudent;