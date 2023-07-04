import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
// Pages
import Homepage from "./pages/Homepage";
import Campuses from "./pages/campusesPages/Campuses";
import Students from "./pages/studentsPages/Students";
import SingleCampus from "./pages/campusesPages/SingleCampus";
import AddCampus from "./pages/campusesPages/AddCampus";
import SingleStudent from "./pages/studentsPages/SingleStudent"
import AddStudent from "./pages/studentsPages/AddStudent";
import EditCampus from "./pages/campusesPages/EditCampus";
function App() {
  return (
    <Router>
        <Link to="/">Home</Link><br/>
        <Link to="/allCampuses">Campuses</Link><br/>
        <Link to="/allStudents">Students</Link><br/>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/allCampuses/*" element={<Campuses />} />
        <Route exact path="/allStudents" element={<Students />} />
        <Route exact path="/singleCampus" element={<SingleCampus/>} />
        <Route exact path="/addCampus" element={<AddCampus />} />
        <Route exact path="/singleStudent" element={<SingleStudent/>} />
        <Route exact path="/addStudent" element={<AddStudent/>} />
        <Route exact path="/editCampus" element={<EditCampus/>} />

      </Routes>
    </Router>
  );
}

export default App;