import { useSelector, useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import {deleteCampusThunk} from "../redux/campuses/campuses.action"
import { updateStudentThunk, fetchAllStudentsThunk } from "../redux/students/students.action";
import {useState} from "react";
import "../pages/campusesPages/index.css"

const DisplaySingleCampus = () => {
    // hook for storing target students to be added to the current campus.
    const [selecetedStudent, setSelecetedStudent] = useState();
    // get the state of current campus
    const Campus = useSelector(state => state.campuses.singleCampus);
    // get the state of all students
    const allStudents = useSelector(state => state.students.allStudents);

    const dispatch = useDispatch();

    // Initializes the state of allStudents for drop-down menu selection if allStudents has not been initialized yet.    
    if(allStudents.length === 0){
        dispatch(fetchAllStudentsThunk());
    };

    //delete the campus from database based on the campus id
    const deleteCampus = (id) =>{
        dispatch(deleteCampusThunk(id))
    };

    // update the campusid of target student to the id of current campus
    const AddStudent = () =>{
        const targetStudent= {
            id: selecetedStudent,
            campusId: Campus[0].id
        }
        dispatch(updateStudentThunk(targetStudent));
        window.location.reload(false);
    };

    const removeStudent = (targetId) =>{
        const targetStudent= {
            id: targetId,
            campusId: null
        }
        dispatch(updateStudentThunk(targetStudent));
        window.location.reload(false);
    };
    return (
        <div className="single-view-container">
            <h1>{Campus[0].name}</h1>

            <div><img src={Campus[0].imageUrl}/></div>
            {/*delete feature that will remove the current campus from database*/}
            <Link to = "/allCampuses" ><button onClick = {() =>deleteCampus(Campus[0].id)}>X</button></Link>
            {/* edit feature that will edit the information of current campus */}
            <Link to = "/editCampus" state = {{campID: Campus[0].id}}><button>Edit</button></Link>
            {/* displays the information of current campus */}
            <h2>{Campus[0].address}</h2>
            <h3>{Campus[0].description}</h3>
            {/* displays a drop-down menu to select which student to add to the current campus.*/}
            <div>
                <select value={selecetedStudent} onChange={(e) => setSelecetedStudent(e.target.value)}>
                    <option value = {""}>Select student</option>
                    {allStudents.map(data=>{
                        return (<option key={data.id} value={data.id}>{data.firstName} {data.lastName}</option>)
                    })};
                </select><br/>
                <button onClick = {AddStudent}>Add</button>
            </div>
            {/* displays the students that are enrolled in current campus, dispalys a message if no students are shown */}
            {Campus[0].students.length!==0?
            (Campus[0].students.map(data => {
                return (
                    <div key={data.id}>
                        <img src={data.imageUrl} />
                        <Link to="/singleStudent" state={{ studentId: data.id }}>
                            {data.firstName} {data.lastName}
                        </Link>
                        <button onClick = {() => removeStudent(data.id)}>Remove</button>
                    </div>
                )
            })):
            (<h3>No students enrolled in this campus</h3>)
            }
        </div>
    )
}
export default DisplaySingleCampus;