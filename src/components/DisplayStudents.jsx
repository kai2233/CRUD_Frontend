import {useSelector,useDispatch} from "react-redux";
const DisplayStudents = () =>{
    const allStudents = useSelector((state) => state.students.allStudents);

    return(
        <div>
            {allStudents.map(data=>{
                return(
                    <div key = {data.id}>
                        <img src = {data.imageUrl}/>
                        <h1>{data.firstName} {data.lastName}</h1>
                    </div>
                )
            })}  
        </div>
    )
}
export default DisplayStudents;