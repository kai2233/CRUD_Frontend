import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStudentThunk } from "../../redux/students/students.action";
import { useLocation } from "react-router-dom";


const EditStudent = () => {
    const location = useLocation();
    const studentId = location.state.studentId;
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [gpa, setGpa] = useState(0);
    const [imageUrl, setImageUrl] = useState();
    const AlterStudent = (e) => {
        e.preventDefault();
        const changedValue = {
            id:studentId,
            firstName,
            lastName,
            email,
            gpa,
            imageUrl
        };
        console.log(changedValue);
        dispatch(updateStudentThunk(changedValue));
    };
    const targetStudent = useSelector((state) => state.students.updatedStudent);
    return (
        <div>
            <h1>Hi! this is edit Student page</h1>
            <form onSubmit = {AlterStudent}>
                <label>First Name</label>
                <input type="text"  placeholder = "First Name..." onChange={(e) => setFirstName(e.target.value)}/><br/>
                <label>Last Name</label>
                <input type="text"  placeholder = "Last Name..." onChange={(e) => setLastName(e.target.value)}/><br/>
                <label>Email</label>
                <input type="text"  placeholder = "Email..." onChange={(e) => setEmail(e.target.value)}/><br/>
                <label>GPA</label>
                <input type="text"  placeholder = "GPA" onChange={(e) => setGpa(e.target.value)}/><br/>
                <label>Image</label>
                <input type="text"  placeholder = "Image Url..." onChange={(e) => setImageUrl(e.target.value)}/><br/>
                <input type="submit" value="Submit"/>
            </form>
            {targetStudent.id===studentId?(<h1>Edited Successfully</h1>):(null)}
        </div>
    )
}
export default EditStudent;