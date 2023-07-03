import { Link } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {deleteCampusThunk} from "../redux/campuses/campuses.action"
const DisplayList = () =>{
    const allCampus = useSelector((state) => state.campuses.allCampuses);
    const dispatch = useDispatch();

    const deleteCampus = (id) =>{
        dispatch(deleteCampusThunk(id))
        console.log("deleteCampus called "+id);
    }
    return(
        <div>
            {allCampus.map(data=>{
                return(
                    <div key = {data.id}>
                        <img src = {data.imageUrl}/>
                        <Link to="/singleCampus" state={{ campID:data.id }}>
                            {data.name}
                        </Link>
                        {/* wrap up function wanted to execute by button onClick otherwise it will automatically executed*/}
                        {/*onClick ={deleteCampus} is just passing in the invocation of function instead of definition of function*/}
                        <button onClick = {() =>deleteCampus(data.id)}>X</button>
                    </div>
                )
            })}  
        </div>
    )
}
export default DisplayList;