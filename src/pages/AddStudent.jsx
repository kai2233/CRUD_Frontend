import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { addNewStudentThunk } from "../redux/students/students.action";

const AddStudent = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [gpa, setGpa] = useState(0.0);
    const [imageUrl, setImageUrl] = useState();
    return (
        <div>
            <h1>Hi! this is Add Student page</h1>

        </div>
    )

};
export default AddStudent;