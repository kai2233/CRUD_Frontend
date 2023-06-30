import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
// Pages
import Homepage from "./pages/Homepage";
import Campuses from "./pages/Campuses";
import Students from "./pages/Students";
function App() {
  return (
    <Router>
        <Link to="/">Home</Link><br/>
        <Link to="/allCampuses">Campuses</Link><br/>
        <Link to="/allStudents">Students</Link><br/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/allCampuses" element={<Campuses />} />
        <Route path="/allStudents" element={<Students />} />
      </Routes>
    </Router>
  );
}

export default App;