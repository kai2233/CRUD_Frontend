import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
// Pages
import Homepage from "./pages/Homepage";
import Campuses from "./pages/Campuses";
import Students from "./pages/Students";
import SingleCampus from "./pages/SingleCampus";
function App() {
  return (
    <Router>
        <Link to="/">Home</Link><br/>
        <Link to="/allCampuses">Campuses</Link><br/>
        <Link to="/allStudents">Students</Link><br/>
        <Link to="/singleCampus">Single Campus</Link><br/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/allCampuses" element={<Campuses />} />
        <Route path="/allStudents" element={<Students />} />
        <Route path="/singleCampus" element={<SingleCampus/>} />
      </Routes>
    </Router>
  );
}

export default App;