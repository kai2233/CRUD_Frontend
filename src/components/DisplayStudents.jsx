import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteStudentThunk } from "../redux/students/students.action";
import "../pages/studentsPages/index.css";

const DisplayStudents = () => {
    const allStudents = useSelector((state) => state.students.allStudents);
    const dispatch = useDispatch();

    const deleteStudent = (id) => {
        dispatch(deleteStudentThunk(id));
        console.log("deleted student id: " + id)
    }
    return (
        <div>
            {allStudents.map(data => {
                return (
                    <div className="display-all-students" key={data.id}>
                        <img src={data.imageUrl} />
                        <div>
                            <Link to="/singleStudent" state={{ studentId: data.id }}>{data.firstName} {data.lastName}</Link>
                            <button onClick={() => deleteStudent(data.id)}>X</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default DisplayStudents;