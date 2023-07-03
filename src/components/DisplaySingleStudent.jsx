import {useSelector} from "react-redux";
const DisplaySingleStudent = () => {
    const student = useSelector((state) => state.students.singleStudent);
    return (
        <div>
            <img src= {student[0].imageUrl} alt={"error"}/>
            <h1>Name: {student[0].firstName} {student[0].lastName}</h1>
            <h2>Email: {student[0].email}</h2>
            <h3>gpa: {student[0].gpa}</h3>
            <h3>Enrolled Campus:</h3>
            {student[0].campusId!==null?(<h2>{student[0].campus.name}</h2>):(<h4>THIS STUDENT DIDN'T ENROLL IN ANY CAMPUS</h4>)}
        </div>
    );

}

export default DisplaySingleStudent;