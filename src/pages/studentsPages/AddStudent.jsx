import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { addNewStudentThunk } from "../../redux/students/students.action";

const AddStudent = () => {
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [gpa, setGpa] = useState(0.0);
    const [imageUrl, setImageUrl] = useState();

    const addNewStudent = (e) => {
        e.preventDefault();
        const newStudent = {
            firstName,
            lastName,
            email,
            gpa,
            imageUrl
        }
        dispatch(addNewStudentThunk(newStudent));
    };
    const newStudent = useSelector((state) => state.students.newStudent);

    return (
        <div>
            <h1>Add Student Form</h1>
            <form onSubmit = {addNewStudent}>
                <label>First Name</label>
                <input type="text" placeholder = "First Name..." required value={firstName} onChange={(e) => setFirstName(e.target.value)}/><br/>
                <label>Last Name</label>
                <input type="text" placeholder = "Last Name..." required value={lastName} onChange={(e) => setLastName(e.target.value)}/><br/>
                <label>Email</label>
                <input type="text" placeholder = "Email..." required value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
                <label>GPA</label>
                <input type="number" min="0" max="4" step = "0.01" placeholder = "GPA" onChange={(e) => setGpa(e.target.value)}/><br/>
                <label>Image</label>
                <input type="text" placeholder = "Image Url..." onChange={(e) => setImageUrl(e.target.value)}/><br/>
                <input type="submit" value="Submit"/>
            </form>
            {newStudent.firstName === firstName && newStudent.lastName === lastName?
                (<h1>Created Successfully</h1>):
                (null)
            }
        </div>
    )

};
export default AddStudent;