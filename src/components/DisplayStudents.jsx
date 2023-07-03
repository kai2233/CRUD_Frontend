import {useSelector,useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import { deleteStudentThunk } from "../redux/students/students.action";
const DisplayStudents = () =>{
    const allStudents = useSelector((state) => state.students.allStudents);
    const dispatch = useDispatch();

    const deleteStudent = (id) => {
        dispatch(deleteStudentThunk(id));
        console.log("deleted student id: "+id)
    }
    return(
        <div>
            {allStudents.map(data=>{
                return(
                    <div key = {data.id}>
                        <img src = {data.imageUrl}/>
                        <Link to = "/singleStudent" state ={{studentId:data.id}}>{data.firstName} {data.lastName}</Link>
                        <button onClick = {()=>deleteStudent(data.id)}>X</button>
                    </div>
                )
            })}  
        </div>
    )
}
export default DisplayStudents;