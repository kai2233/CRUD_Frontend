import React, {useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {fetchAllCampusesThunk} from "../../redux/campuses/campuses.action";
import { Link } from "react-router-dom";
import DisplayCampuses from '../../components/DisplayCampuses';
import "./campusesIndex.css"
const Campuses = () => {
  const allCampus = useSelector((state) => state.campuses.allCampuses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCampusesThunk());
  }, []);
  return (
    <div className="root-container"> 
      <h1>All Campuses</h1>
      {/* <Link to ="/singleCampus">Single Campus</Link><br/> */}
      <Link className="a-inside-root-container" to = "/addCampus"><button>click to add campus</button></Link>
      {allCampus.length!==0?(<DisplayCampuses/>):(<h3>There are no campuses registered in the database</h3>)}
    </div>
  );
};

export default Campuses;