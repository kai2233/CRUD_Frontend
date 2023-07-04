import { useSelector, useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import {deleteCampusThunk} from "../redux/campuses/campuses.action"
const DisplaySingleCampus = () => {
    const Campus = useSelector(state => state.campuses.singleCampus);
    const dispatch = useDispatch();
    const deleteCampus = (id) =>{
        dispatch(deleteCampusThunk(id))
        alert("campus deleted");
    }
    return (
        <div >
            <img src={Campus[0].imageUrl} />
            <button onClick = {() =>deleteCampus(Campus[0].id)}>X</button>
            <Link to = "/editCampus" state = {{campID: Campus[0].id}} >Edit</Link>
            <h1>{Campus[0].name}</h1>
            <h2>{Campus[0].address}</h2>
            <h3>{Campus[0].description}</h3>
            {Campus[0].students.length!==0?
            (Campus[0].students.map(data => {
                return (
                    <div key={data.id}>
                        <img src={data.imageUrl} />
                        <Link to="/singleStudent" state={{ studentId: data.id }}>
                            {data.firstName} {data.lastName}
                        </Link>
                    </div>
                )
            })):
            (<h3>No students enrrolled in this campus</h3>)
            }
        </div>
    )
}
export default DisplaySingleCampus;