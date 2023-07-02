import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
// Pages
import Homepage from "./pages/Homepage";
import Campuses from "./pages/Campuses";
import Students from "./pages/Students";
import SingleCampus from "./pages/SingleCampus";
import AddCampus from "./pages/AddCampus";
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
      </Routes>
    </Router>
  );
}

export default App;