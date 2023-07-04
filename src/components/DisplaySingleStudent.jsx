import {useSelector,useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { deleteStudentThunk, updateStudentThunk } from "../redux/students/students.action";
import { fetchAllCampusesThunk } from "../redux/campuses/campuses.action";
import {useState, useEffect} from "react";
const DisplaySingleStudent = () => {
    const student = useSelector((state) => state.students.singleStudent);
    const allCampuses = useSelector((state) => state.campuses.allCampuses);
    //hook that will be used to get the selected campus
    const [selectedCampus, setSelectedCampus] = useState();
    const dispatch = useDispatch();
    // Initializes the state of allCampuses for drop-down menu selection if allCampuses has not been initialized yet.    
    if(allCampuses.length === 0){
        dispatch(fetchAllCampusesThunk());
    }
    //delete the student from the database based on the student id
    const deleteStudent = (id) => {
        dispatch(deleteStudentThunk(id));
    }

    //edit the campus of the students based on the  id
    const changeCampus = () => {
        const changeCampus={
            id: student[0].id,
            campusId: selectedCampus
        }
        dispatch(updateStudentThunk(changeCampus));
        window.location.reload(false);
    };
    return (
        <div>
            <img src= {student[0].imageUrl} alt={"error"}/>
            {/* delete feature that will remove the student from the database */}
            <Link to = "/allStudents" ><button onClick = {()=>deleteStudent(student[0].id)}>X</button></Link>
            {/* edit feature that can able the user to alter student's information */}
            <Link to = "/editStudent" state ={{studentId:student[0].id}}>Edit</Link>
            {/* display student information */}
            <h1>Name: {student[0].firstName} {student[0].lastName}</h1>
            <h2>Email: {student[0].email}</h2>
            <h3>gpa: {student[0].gpa}</h3>
            <h3>Enrolled Campus:</h3>
            {/* display a drop down menue to choose which campus to enroll */}
            <div>
                <select value={selectedCampus} onChange={(e) => setSelectedCampus(e.target.value)}>
                    <option value = {""}>Select Campus</option>
                    {allCampuses.map(data=>{
                        return (<option key={data.id} value={data.id}>{data.name}</option>)
                    })};
                </select><br/>
                <button onClick = {changeCampus}>Change</button>
            </div>
            {/* diplay a message if no enrrolled campus is shown */}
            {student[0].campusId!==null?(<h2>{student[0].campus.name}</h2>):(<h4>THIS STUDENT DIDN'T ENROLL IN ANY CAMPUS</h4>)}
        </div>
    );

}

export default DisplaySingleStudent;