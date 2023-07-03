import {useSelector,useDispatch} from "react-redux";
import {Link} from "react-router-dom";
const DisplayStudents = () =>{
    const allStudents = useSelector((state) => state.students.allStudents);

    return(
        <div>
            {allStudents.map(data=>{
                return(
                    <div key = {data.id}>
                        <img src = {data.imageUrl}/>
                        <Link to = "/singleStudent" state ={{studentId:data.id}}>{data.firstName} {data.lastName}</Link>
                    </div>
                )
            })}  
        </div>
    )
}
export default DisplayStudents;